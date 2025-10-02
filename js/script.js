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

// CALCULADORA

const display = document.getElementById('result');
let currentInput = '';
let currentOperator = '';
let previousInput = '';

// Função auxiliar para atualizar o display
function updateDisplay() {
    let displayText = '';
    
    if (previousInput !== '') {
        displayText += previousInput;
    }
    
    if (currentOperator !== '') {
        displayText += ` ${currentOperator}`;
    }
    
    if (currentInput !== '') {
        displayText += ` ${currentInput}`;
    }
    
    display.value = displayText.trim();
}

function insert(number) {
    currentInput += number; 
    updateDisplay();
}

// Função de Inserir operações
function insertOperation(operation) {
    // Permitir operador se houver currentInput OU previousInput
    if (currentInput === '' && previousInput === '') return;

    if (currentInput !== '' && previousInput !== '') {
        calculate();
    }

    if (currentInput !== '') {
        previousInput = currentInput;
        currentInput = '';
    }

    currentOperator = operation;
    updateDisplay();
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
        case 'x':
            result = previous * current;
            break;
        case '/':
            if (current === 0) {
                display.value = 'Error';
                resetCalc();
                return;
            }
            result = previous / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperator = '';
    previousInput = '';

    updateDisplay();
}

function del() {
    if (currentInput.length > 0) {
        // Apaga número atual
        currentInput = currentInput.slice(0, -1);
    } else if (currentOperator !== '') {
        // Se não tem número atual, apaga operador
        currentOperator = '';
    } else if (previousInput.length > 0) {
        // Se não tem número nem operador, apaga número anterior
        previousInput = previousInput.slice(0, -1);
    }

    // Atualiza display
    updateDisplay();
}

function resetCalc() {
    previousInput = '';
    currentOperator = '';
    currentInput = '';
    display.value = '';
}