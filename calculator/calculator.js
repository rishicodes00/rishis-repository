'use strict';

'use strict';


let string = '';
let buttons = document.querySelectorAll("button");

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
        } else {
            string = string + btn.target.innerHTML;
            display.value = string;
        }
    });
});
