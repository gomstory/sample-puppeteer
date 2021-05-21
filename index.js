const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com/');
  await page.type('input.gLFyf', 'angular');
  await page.keyboard.press('Enter');
  await page.waitForNavigation();
  await page.screenshot({ path: 'screen1.png' });
  await page.click('#rso a[href]')
  await page.waitForNavigation();
  await page.screenshot({ path: 'screen2.png' });
  await browser.close();
})();