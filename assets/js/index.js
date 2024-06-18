import {destroyError, addError} from './utils.js';

/*----------------- SWAP Pages Config -----------------*/
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


/*----------------- Sing Up Config -----------------*/

// variables
const uName = document.getElementById("uName");

// AJEITAR REGEX!!!!!!!!!!!!!!!!!!
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/;
const uEmailIN = document.getElementById("uEmailIN");
const uEmailUP = document.getElementById("uEmailUP");

const uPassIN = document.getElementById("uPassIN");
const uPassUP = document.getElementById("uPassUP");

const uCPass = document.getElementById("uCPass");

// dynamic event listeners
uName.addEventListener('input', validateName);
uEmailIN.addEventListener('input', () => {
    validateEmail('IN');
});
uEmailUP.addEventListener('input', () => {
    validateEmail('UP');
});

// uPass.addEventListener('input', validatePass);

// uCPass.addEventListener('input', validateCPass);

// functions
function validateName(){
    let name = uName.value;

    if(name === ''){
        nameELEMENT.style.border = "1px solid red";
    }
    if(name.length < 6) {
        nameELEMENT.style.border = "1px solid red";
    }
    else{
        nameELEMENT.style.border = "1px solid green";
    }
}

function validateEmail(type){
    let emailELEMENT = document.getElementById('uEmail' + type);
    let email = emailELEMENT.value;

    if(emailRegex.test(email)){
        emailELEMENT.style.border = "1px solid green";
        destroyError(emailELEMENT);
    }
    else{
        emailELEMENT.style.border = "1px solid red";
        addError('Email inválido!', emailELEMENT);
    }
    if(email === ''){
        emailELEMENT.style.border = "1px solid red";
        addError('Digite um email!', emailELEMENT);
    }
}
