// const inputbox = document.getElementById("inputout");

// function insernumber(input) {
//     inputbox.value.innerHTML += input;
// }

// function clearoperation() {
//     inputbox.value = "";
// }

// function handleoperation() {
//     try {
//         inputbox.value = eval(inputbox.value);
//     }
//     catch(error) {
//         inputbox.value = "Error";
//     }
// }




// let operations = document.querySelectorAll('.button__operation span');

// function loopOperations() {
//     for (let i = 0; i < operations.length; i++) {
//         operations[i].addEventListener('click', function(){
//             if(operations[i].innerHTML === '+'){
//                 console.log('quero somar');
//             }
//         })
//     }
// }

// loopOperations();



// Botão de Switch
const firstTheme = document.getElementById('first-theme');
const secondTheme = document.getElementById('second-theme');
const threeTheme = document.getElementById('three-theme');

const switchCircle = document.getElementById('themeCircle')

// Calculadora
const display = document.getElementById('result');
var currentInput = '';
var currentOperator = '';
var previousInput = '';

firstTheme.addEventListener("click", function() {
    switchCircle.classList.remove('second-theme', 'three-theme');
    console.log('clicado 01');
});

secondTheme.addEventListener("click", function() {
    switchCircle.classList.add('second-theme');
    console.log('clicado 02');
});

threeTheme.addEventListener("click", function() {
    switchCircle.classList.remove('second-theme');
    switchCircle.classList.add('three-theme');
    console.log('clicado 03')
});

function insert(number) {
    currentInput += number;
    display.value = `${currentInput} ${currentOperator} ${previousInput}`;
}




