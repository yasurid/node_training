const puppeter = require('puppeteer');

(async () => {
    //create browser instance, that will be launched as a window, not as a just a request, 
    //headless is a request
    const browser =  await puppeter.launch({
        headless : false
    });
    const page = await browser.newPage();

    await page.goto('http://222.165.180.84/DTET/public/');
    await page.type('input[name=username]', 'danushika', {delay: 100});
    await page.type('input[name=password]', '1991DES26', {delay: 100});
    await page.click('#login-box > div > div > form > fieldset > div.clearfix > button');
    await page.waitForTimeout(4000);

})();