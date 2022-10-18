import puppeteer from 'puppeteer';
import * as Path from 'node:path';

(async () => {
    const browser = await puppeteer.launch();
    console.log("launched");
    const page = await browser.newPage();
    console.log("new page");
    const url = 'file://' + Path.join(process.cwd(), 'build', 'index.html');
    await page.goto(url);
    console.log("page loaded");
    const screenshot = await page.screenshot({path: 'build/a.jpg'});
    console.log(screenshot)
    await browser.close();
})();