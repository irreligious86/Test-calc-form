const value1 = document.querySelector('#val1');
const value2 = document.querySelector('#val2');
const operator = document.querySelector('#operator');
const result = document.querySelector('#result');
const runBtn = document.querySelector('.run-button');




const calc = (a, b, operator) => {
    switch(operator) {
        // case '+': return a+b;
        case '+': return a+b;
        case '-': return a-b;
        case '*': return a*b;
        case '/': return a/b;
        default: return "Something wrong";
    }
}

const runBtnHandler = (event) => {
    event.preventDefault();
    console.log(value1, value2, operator, result, runBtn);
    console.log(event)
    console.log(calc(value1, value2, operator));
    result.value = calc(value1, value2, operator);
}



runBtn.addEventListener('click', runBtnHandler)