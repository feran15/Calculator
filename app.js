let screen = document.getElementById('textBox');
let screen2 = document.getElementById('smallInput')
let canEquate = false;
let operator = ''
let canClear = false;
let firstValue = ''
let secondValue = ''


screen.value = 0

function clicked(num) {
    if (screen.value == 0) {
        screen.value = ''
    }

    if (canClear == true) {
        screen.value = ''
        canClear = false
    }
    screen.value += num;

}

function deletes() {
    screen.slice(0, -1)
};

function deletes2() {
    screen.value = '0';
};

function operate(op) {
    if (operator) {
        equate()
    }

    canClear = true
    operator = op
    firstValue = screen.value

    screen2.value = screen.value + ' ' + op;

};



function equate() {
    secondValue = screen.value;

    if (operator === '+') {
        screen.value = parseInt(firstValue) + parseInt(screen.value);
    }

    if (operator === '-') {
        screen.value = parseInt(firstValue) - parseInt(screen.value);
    }

    if (operator === '*') {
        screen.value = parseInt(firstValue) * parseInt(screen.value);
    }

    if (operator === '÷') {
        screen.value = parseInt(firstValue) / parseInt(screen.value);
    }

    // screen2.value = (screen2.value) + ' ' + (secondValue) + ' ' + '=' + ' '; 
    screen2.value = (`${screen2.value} ${secondValue} = `);

    operator = '';
    firstValue = '';
    secondValue = '';
}









































     //function operate(op)
     // if (screen.value !== '' && screen2.value !== ''){
    //     canEquate = true;
    // }

    // if (canEquate === true) {
    //     let evaluation = eval(screen2.value += screen.value);
    //              screen.value = evaluation;
    //          }



    //CORRECT