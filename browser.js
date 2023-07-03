const puppeteer = require("puppeteer");

async function startBrowser(){
    let browser;
    try {
        console.log("Abriendo navegador......");
        browser = await puppeteer.launch({
            headless: false,
            args:["--disable-setuid-sandbox"],
            ignoreHTTPSErrors: true
        });
    } catch 
}




