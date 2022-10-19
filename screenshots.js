import puppeteer from 'puppeteer';
import * as Path from 'node:path';

(async () => {
    const fileIn = process.argv[2];
    const fileOut = process.argv[3];
    const browser = await puppeteer.launch();
    console.log("launched");
    const page = await browser.newPage();
    console.log("new page");
    const url = 'file://' + Path.join(process.cwd(), fileIn);
    await page.goto(url);
    console.log("page loaded");
    const screenshot = await page.screenshot({path: fileOut});
    console.log(screenshot)
    await browser.close();
})();