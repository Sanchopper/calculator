let currentNumber = ''
let firstNumber = ''
let OP
let monitor = document.querySelector('.monitor')
let justCalculated = false


const digits = document.querySelectorAll(".dgt")
digits.forEach((button) => {
    button.addEventListener('click', ()=> {
        if (justCalculated){
            currentNumber = ''
            monitor.textContent = ''
            justCalculated = false
        }
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
    let result = calculation(firstNumberFloat, currentNumberFloat, OP)
    monitor.textContent = result
    firstNumber = result.toString()
    currentNumber = ''
    justCalculated = true
 })

const clear = document.querySelector('.clear')
clear.addEventListener('click', ()=> {
    clearCalculator()
})

 function calculation(a, b, op) {
    if (op === '/' && b === 0) {
        return "error"
    }
    if (op === '/') return a / b
    if (op === '*') return a * b
    if (op === '+') return a + b
    return a - b
 }

 function clearCalculator(){
    firstNumber = '';
    currentNumber = '';
    OP = null;
    monitor.textContent = '0';
    justCalculated = false
 }