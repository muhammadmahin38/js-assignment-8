// Design by Muhammad Mahin

//Selete all secltors
const inputOne = document.getElementById("inputOne");
const inputTwo = document.getElementById("inputTwo");
const result = document.getElementById("result");

//Reset Feild Fuction
function resetInput() {
    inputOne.value = "";
    inputTwo.value = "";
}
//Addition 
function addition() {
    if(inputOne.value && inputTwo.value)  {
        const addition = parseInt(inputOne.value) + parseInt(inputTwo.value);
        result.innerHTML= addition;
        resetInput();
    } else {
        alert("Please Fill Out this All Value");
    } 
}

//Subtruction
function subtraction() {
    if(inputOne.value && inputTwo.value) {
        const subtraction = parseInt(inputOne.value) - parseInt(inputTwo.value);
        result.innerHTML= subtraction;
        resetInput();
    } else {
        alert("Please Fill Out this All Value");
    } 
}

//Divition
function divition() {
    if(inputOne.value && inputTwo.value) {
        const divition = parseInt(inputOne.value) / parseInt(inputTwo.value);
        result.innerHTML= divition.toFixed(2);
        resetInput();
    } else {
        alert("Please Fill Out this All Value");
    }
}

//Multipication
function multipication() {
    if(inputOne.value && inputTwo.value) {
        const multipication = parseInt(inputOne.value) * parseInt(inputTwo.value);
        result.innerHTML= multipication;
        resetInput();
    } else {
        alert("Please Fill Out this All Value");
    }
}