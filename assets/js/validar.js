import {destroyError, addError} from './utils.js';

// variable to define if is signIN or signUP
let isUPorIN = 'IN';

/*----------------- SWAP Pages Config -----------------*/
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    isUPorIN = 'UP';
});
    loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    isUPorIN = 'IN';
});




/*----------------- variables -----------------*/
// variables
const forms = document.querySelectorAll('form');
const buttons = document.querySelectorAll('.btn_sub');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const uName = document.getElementById("uName");
const uEmailIN = document.getElementById("uEmailIN");
const uEmailUP = document.getElementById("uEmailUP");
const uPassIN = document.getElementById("uPassIN");
const uPassUP = document.getElementById("uPassUP");
const uCPass = document.getElementById("uCPass");


/*----------------- event listeners -----------------*/
uName.addEventListener('input', validateName);
uEmailIN.addEventListener('input', validateEmail);
uEmailUP.addEventListener('input', validateEmail);
uPassIN.addEventListener('input', validatePass);
uPassUP.addEventListener('input', validatePass);
uCPass.addEventListener('input', validateCPass);
forms.forEach(e => {
    e.addEventListener('submit', j => {
        j.preventDefault();
    })
})
// sign up button
buttons[0].addEventListener('click', signUP);
// sign in button
buttons[1].addEventListener('click', signIN);


/*----------------- validate functions -----------------*/
function validateName(){
    const name = uName.value;

    uName.style.border = "1px solid green";
    destroyError(uName, 'input_error');

    // verify if the name is valid
    if(name.length < 6){
        uName.style.border = "1px solid red";
        addError('Tamanho mínimo: 6 caracteres!', uName);
    }

    // verify if the name is empty
    if(name === ''){
        uName.style.border = "1px solid red";
        addError('Digite um nome!', uName);
    }
}

function validateEmail(type){
    // get the page (Sign IN or Sign UP) of the email
    const emailELEMENT = document.getElementById('uEmail' + isUPorIN);

    const email = emailELEMENT.value;   
    destroyError(emailELEMENT, 'input_error');
    
    // verify the regex of the email
    if(emailRegex.test(email)){
        emailELEMENT.style.border = "1px solid green";
    }
    else{
        emailELEMENT.style.border = "1px solid red";
        addError('Email inválido!', emailELEMENT);
    }

    // verify if is empty
    if(email === ''){
        emailELEMENT.style.border = "1px solid red";
        addError('Digite um email!', emailELEMENT);
    }
}

function validatePass(type){
    // get the page (Sign IN or Sign UP) of the password
    const passELEMENT = document.getElementById('uPass' + isUPorIN);
    const pass = passELEMENT.value;
    
    passELEMENT.style.border = "1px solid green";
    destroyError(passELEMENT, 'input_error');

    // min length
    if (pass.length < 8){
        passELEMENT.style.border = "1px solid red";
        addError('Tamanho mínimo: 8 caracteres!', passELEMENT);
    }

    // if is empty
    if(pass === '' || pass === null){
        passELEMENT.style.border = "1px solid red";
        addError('Digite uma senha!', passELEMENT);
    }
}

function validateCPass(){
    const pass = uPassUP.value;
    const cPass = uCPass.value;

    uCPass.style.border = "1px solid green"
    destroyError(uCPass, 'input_error');

    if (cPass !== pass || cPass === null || cPass == ''){
        uCPass.style.border = "1px solid red";
        addError('Senhas não conferem!', uCPass);
    }
}

/*----------------- submit functions -----------------*/
function signUP(){
    validateName();
    validateEmail();
    validatePass();
    validateCPass();
    validateForms();
}

function signIN(){
    validateEmail();
    validatePass();
    validateForms();
}

function validateForms(){
    let hasInvalidInputs = false;
    let inputs = document.getElementsByClassName('input_sign' + isUPorIN);

    // verify if exist a invalid input
    Array.from(inputs).forEach(e => {
        if(e.style.border === "1px solid red"){
            hasInvalidInputs = true;
        }
    });

    // if not exist
    if(!hasInvalidInputs) {
        window.location.href = "index.html";
    }
}