const puppeter = require("puppeteer");

(async() =>{
    const browser = await puppeter.launch();
    const page = await browser.newPage();

    await page.goto('https://www.facebook.com/');
    await page.screenshot({path: 'example.png'});

    await browser.close();

})();