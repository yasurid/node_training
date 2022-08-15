//dot env configurations
//require('dotenv').config();
//console.log(process.env);

const puppeter = require('puppeteer');


(async () => {
    //create browser instance, that will be launched as a window, not as a just a request, 
    //headless is a request
    //
    const browser =  await puppeter.launch({
        headless : false
    });
    const page = await browser.newPage();

    await page.goto('http://222.165.180.84/DTETTEST/public/');
    await page.type('input[name=username]', 'danushika', {delay: 100});
    await page.type('input[name=password]', '1991DES26', {delay: 100});
    
    await Promise.all([
        page.click('#login-box > div > div > form > fieldset > div.clearfix > button'),
        page.waitForNavigation()
      ]);
    
    await page.goto('http://222.165.180.84/DTETTEST/public/viewFullNameUpdate', {
        waitUntil: 'load',
      });
    await page.type('#nic_val', '200155803814', {delay: 300});
    
    await page.click('#hidden_area1 > button', {delay: 500});

    await page.waitForSelector('#fullName', {visible: true, timeout: 3000 });

    //#fullName
    await page.type('#fullName', 'ARULSELVAM SANJIKA C', {delay: 300});
   // await page.$eval('#fullName', el => el.value = 'test@example.com');
    //#hidden_area2 > div.form-actions.center > button
    await page.click('#hidden_area2 > div.form-actions.center > button',  {delay: 900});
    //body > div.bootbox.modal.fade.in > div.modal-footer > a.btn.btn-primary
    await page.waitForSelector('body > div.modal > div.modal-footer > a.btn.btn-primary', {visible: true, timeout: 3000 });
    await page.click('body > div.modal > div.modal-footer > a.btn.btn-primary',  {delay: 400});

    await page.waitForFunction('.modal', { hidden: true });


   //await page.keyboard.press('Enter');

    await page.waitForTimeout(4000);

})();