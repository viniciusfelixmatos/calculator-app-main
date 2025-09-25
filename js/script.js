// SWITCH DE TEMAS
const switchContainer = document.getElementById('themeSwitch');
const body = document.body;

const themes = ['theme-1', 'theme-2', 'theme-3'];
const stages = ['stage-0', 'stage-1', 'stage-2'];

let currentIndex = 0;

function setTheme(index) {
    
    body.classList.remove(...themes);
    body.classList.add(themes[index]);

    
    switchContainer.classList.remove(...stages);
    switchContainer.classList.add(stages[index]);

    currentIndex = index;
}


switchContainer.addEventListener('click', () => {
    setTheme((currentIndex + 1) % 3);
});

setTheme(currentIndex);

const display = document.getElementById('result');
let currentInput = 0;
let currentOperator = '';
let previousInput = '';

function insert(number) {
    currentInput += number;
    display.value = `${currentInput} ${currentOperator} ${previousInput}`;
}


// Função de Inserior operações
function insertOperation(Operation) {

    // Condição, se for vázio retorne nada, se no previous tiver algo diferente realize a função de calculo
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }

    currentOperator = Operation;
    previousInput = currentInput;
    currentInput = '';

    display.value = `${currentOperator} ${previousInput}`;
}

function calculate() {
    if (currentInput === '' || previousInput === '') {
        return;
    }

    let result;
    let current = parseFloat(currentInput);
    let previous = parseFloat(previousInput);

    switch (currentOperator) {
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case '.' || 'x':
            result = previous * current;
            break;
        case '/':
            result = previous / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperator = '';
    previousInput = '';

    display.value = currentInput;

}

function resetCalc() {
    previousInput = '';
    currentOperator = '';
    currentInput = '';
    display.value = '';
}