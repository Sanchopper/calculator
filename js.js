let currentNumber = ''
let firstNumber = ''
let OP
let monitor = document.querySelector('.monitor')


const digits = document.querySelectorAll(".dgt")
digits.forEach((button) => {
    button.addEventListener('click', ()=> {
        currentNumber += button.id
        monitor.textContent = currentNumber
    })
})
 const operator = document.querySelectorAll('.op')
 operator.forEach((button) => {
    button.addEventListener('click', ()=> {
        firstNumber = currentNumber
        currentNumber = ''
        OP = button.id
        monitor.textContent = button.id
    })
 })

 const calculate = document.querySelector('.calculate')
 calculate.addEventListener('click', ()=> {
    let firstNumberFloat = Number(firstNumber)
    let currentNumberFloat = Number(currentNumber)
    monitor.textContent = calculation(firstNumberFloat, currentNumberFloat, OP)

 })

const clear = document.querySelector('.clear')
clear.addEventListener('click', ()=> {
    clearCalculator()
})

 function calculation(a, b, op) {
    if (op === '/') {
        return a / b
    } else if (op === '*'){
        return a * b
    } else if (op === '+'){
        return a + b
    } else {
        return a - b
    }

 }

 function clearCalculator(){
    firstNumber = null;
    currentNumber = '';
    OP = null;
    monitor.textContent = '0';
 }