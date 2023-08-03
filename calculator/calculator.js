'use strict';


let string = '';
let buttons = document.querySelectorAll("button");
// const erase =document.querySelector(".backspace").value =string.length -1;

const arr = Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector(".calculations").value = string
        } else {
            console.log(e.target.innerHTML)
            string = string + e.target.innerHTML;
            document.querySelector(".calculations").value = string
        }
    })
})