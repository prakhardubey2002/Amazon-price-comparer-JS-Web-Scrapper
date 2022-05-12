const nightmare = require('nightmare')()//this is returning us a function that we can use it by addind () at end


async function checkprice(){
    const priceString = await   nightmare.goto("https://www.amazon.in/Samsung-Internal-Solid-State-MZ-V7S500BW/dp/B07MFBLN7K")
                                .wait(".a-price-whole")
                                .evaluate(()=>document.getElementsByClassName("a-price-whole").innerText)
                                .end()

}