'use strict';


let string = '';
let buttons = document.querySelectorAll("button");

document.addEventListener('keydown', (event) => {
    const allowedKeys = /^[0-9()]*$/; 
    if (!allowedKeys.test(event.key) ) {
        event.preventDefault();
    }
});

const calculate =()=> {
    try {
        const result = eval(string);
        return result;
    } catch (error) {
        return 'Error';
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', (btn) => {
        const display = document.querySelector(".calculations");

        if (btn.target.innerHTML === "=") {
            string = calculate();
            display.value = string;
        } else if (btn.target.innerHTML === "C") {
            string = '';
            display.value = '';
        } else if (btn.target.innerHTML === "back") {
            string = string.slice(0, -1); 
            display.value = string;
        } 
        else {
            string = string + btn.target.innerHTML;
            display.value = string;
        }
    });
});
