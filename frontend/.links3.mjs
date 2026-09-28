import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 1000 });
await page.goto('http://localhost:5174/services/support-to-cpas', { waitUntil: 'domcontentloaded' });
await new Promise(r => setTimeout(r, 4000));
const data = await page.evaluate(() => {
  const strip = [...document.querySelectorAll('div')].find(d => (d.style.animation||'').includes('resource-ticker'));
  if (!strip) return null;
  const kids = [...strip.children];
  return kids.slice(0, kids.length/2).map(k => {
    const a = k.tagName === 'A' ? k : k.querySelector('a');
    return { title: k.querySelector('h4')?.textContent?.trim(), href: a ? a.getAttribute('href') : '(modal: gated PDF)' };
  });
});
console.log(data ? data.map(d => '  - ' + JSON.stringify(d.title) + ' -> ' + d.href).join('\n') : '!! ticker not found');
await browser.close();
