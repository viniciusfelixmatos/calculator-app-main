// SWITCH DE TEMAS
const firstTheme = document.getElementById('first-theme');
const secondTheme = document.getElementById('second-theme');
const threeTheme = document.getElementById('three-theme');
const switchContainer = document.getElementById('themeSwitch');
const body = document.body;

const themes = ['theme-1', 'theme-2', 'theme-3'];
const stages = ['stage-0', 'stage-1', 'stage-2'];

let currentIndex = 0; // 0 = primeiro tema

function setTheme(index) {
    // Atualiza tema do body
    body.classList.remove(...themes);
    body.classList.add(themes[index]);

    // Atualiza posição da bolinha
    switchContainer.classList.remove(...stages);
    switchContainer.classList.add(stages[index]);

    currentIndex = index;
}

// Clicar no container cicla para o próximo tema
switchContainer.addEventListener('click', () => {
    setTheme((currentIndex + 1) % 3);
});

// Clicar nos números vai direto para o tema correspondente
firstTheme.addEventListener('click', () => setTheme(0));
secondTheme.addEventListener('click', () => setTheme(1));
threeTheme.addEventListener('click', () => setTheme(2));

// Inicializa
setTheme(currentIndex);

// CÓDIGO DA CALCULADORA (sem alterações)
const display = document.getElementById('result');
let currentInput = '';
let currentOperator = '';
let previousInput = '';

function insert(number) {
    currentInput += number;
    display.value = `${currentInput} ${currentOperator} ${previousInput}`;
}
