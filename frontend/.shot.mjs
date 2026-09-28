import puppeteer from 'puppeteer';
const [,, url, outPrefix, w='1440'] = process.argv;
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: +w, height: 1000, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
await new Promise(r => setTimeout(r, 4000));
await page.evaluate(() => {
  const btns = [...document.querySelectorAll('button')];
  const a = btns.find(b => /accept all/i.test(b.textContent||''));
  if (a) a.click();
});
await new Promise(r => setTimeout(r, 500));
const h = await page.evaluate(() => document.body.scrollHeight);
let i = 0;
for (let y = 0; y < h; y += 900) {
  await page.evaluate(yy => window.scrollTo(0, yy), y);
  await new Promise(r => setTimeout(r, 1100));
  await page.screenshot({ path: `${outPrefix}-${String(i).padStart(2,'0')}.png` });
  i++;
}
console.log('ok', i, 'height', h);
await browser.close();
