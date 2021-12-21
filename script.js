
const result = document.querySelector('#result');
const runBtn = document.querySelector('.run-button');
const legends = document.querySelectorAll('.form-legend');

const calc = (a, b, operator) => {
    switch (operator) {
        case '+':
            return +a + +b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return "Something wrong";
    }
}

const runBtnHandler = (event) => {
    event.preventDefault();
    const value1 = document.querySelector('#val1').value;
    const value2 = document.querySelector('#val2').value;
    const select = document.querySelector('#operator');
    const selectValue = select.options[select.selectedIndex].value;
    result.value = Math.round(calc(value1, value2, selectValue));
}

const visibleToggler = e => {
    e.target.classList.toggle('transparent')
}

legends.forEach(i => i.addEventListener('mouseover', visibleToggler))

legends.forEach(i => i.addEventListener('mouseout', visibleToggler))

runBtn.addEventListener('click', runBtnHandler)