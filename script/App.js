"use strict"

const setBg = () => {
    const random = Math.floor(Math.random()*16777215).toString(16)
    document.body.style.backgroundColor = "#" + random
    color.innerHTML = "#" + random
    color.style.color = "#" + random
}
let button = document.querySelector('#main-block__button')
button.addEventListener("click", setBg)
setBg()