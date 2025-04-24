let currentNumber = ''
let firstNumber
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
    })
 })

 const calculate = document.querySelector('.=')
 calculate.addEventListener(('click', ()=> {
    let firstNumber = num(str)
    let currentNumber = num(str)
    monitor.textContent = calculation(firstNumber, currentNumber, OP)
 }))

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