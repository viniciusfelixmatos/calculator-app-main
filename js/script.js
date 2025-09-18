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

function addTip() {
    let tip = document.querySelectorAll(".button__number span");
    let input = document.querySelector('#inputout');
    console.log(input)
    tip.forEach((item) => {
        item.addEventListener("click", (event) => {
            console.log(item.innerHTML);

            input.value += item.innerHTML;
        });
    });
}

addTip(); // <-- call addTip() once in the js

function operationSum() {
    console.log('teste');
}

document.querySelector('#operationSum').addEventListener('click', operationSum)