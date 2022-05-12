const nightmare = require('nightmare')()//this is returning us a function that we can use it by addind () at end

const readline = require("readline");//built-in node library for input and output interface and management

const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let name = "";
r2.question("Enter name\n", function (string) {
    name = string;
    r2.close();
});


checkprice()

//https://www.amazon.in/Samsung-Internal-Solid-State-MZ-V7S500BW/dp/B07MFBLN7K
async function checkprice() {
    const priceString = await nightmare.goto("https://www.amazon.in/Samsung-Internal-Solid-State-MZ-V7S500BW/dp/B07MFBLN7K")
        .wait("#mbc-price-1")
        .evaluate(() => document.getElementById("mbc-price-1").innerText)//amazon price class and id are subject to change with time id available here may fail to retrieve data in future because of its replacement with newer class or id
        .end()

    const priceNumber = (priceString.replace(',', ''))
    const price = (priceNumber.replace('₹', ''))
    // console.log(price);
    const a = Math.trunc(price)
    console.log(`Your item  Samsung evo with current price of ${a}`);


    if (a < 6500) {
        console.log(` ${name} your item  is Cheap now`);
    }
    if
        (a > 6500) {
        console.log(`${name} your item is costly now `);
    }
    else {
        console.error("unable resolve request");
    }
}