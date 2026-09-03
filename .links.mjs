import puppeteer from 'puppeteer';
const pages = [
  ['/services/managed-accounting-bookkeeping', 'Accounting & Bookkeeping'],
  ['/services/tax-compliance-advisory', 'Tax Compliance & Advisory'],
  ['/services/business-advisory', 'Business Advisory'],
];
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
for (const [path, service] of pages) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000 });
  await page.goto('http://localhost:5174' + path, { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 3500));
  const data = await page.evaluate(() => {
    // find the ticker container by its animation name
    const strip = [...document.querySelectorAll('div')].find(d => (d.style.animation||'').includes('resource-ticker'));
    if (!strip) return null;
    const kids = [...strip.children];
    return kids.slice(0, kids.length/2).map(k => {
      const a = k.tagName === 'A' ? k : k.querySelector('a');
      const title = k.querySelector('h4')?.textContent?.trim();
      return { title, href: a ? a.getAttribute('href') : '(modal: gated PDF)' };
    });
  });
  console.log('\n== ' + path + '  [' + service + ']');
  if (!data) { console.log('  !! ticker not found'); }
  else data.forEach(d => console.log('  -', JSON.stringify(d.title), '->', d.href));
  await page.close();
}
await browser.close();
