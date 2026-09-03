import puppeteer from 'puppeteer';
const targets = JSON.parse(process.argv[2]);
const width = +(process.argv[3] || 1440);
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
for (const [path, name, sel] of targets) {
  const page = await browser.newPage();
  await page.setViewport({ width, height: 1000, deviceScaleFactor: 1 });
  await page.goto('http://localhost:5174' + path, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await new Promise(r => setTimeout(r, 3000));
  await page.evaluate(() => {
    const b = [...document.querySelectorAll('button')].find(x => /accept all/i.test(x.textContent||''));
    if (b) b.click();
  });
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y < h; y += 700) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 90)); }
    window.scrollTo(0, 0);
  });
  await new Promise(r => setTimeout(r, 1200));
  let el = null;
  if (sel) el = await page.$(sel);
  const out = `.shots/${name}-${width}.png`;
  if (el) await el.screenshot({ path: out });
  else await page.screenshot({ path: out, fullPage: true });
  console.log('saved', out);
  await page.close();
}
await browser.close();
