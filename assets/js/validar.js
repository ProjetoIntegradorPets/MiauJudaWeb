import {destroyError, addError} from './utils.js';

// variable to define if is signIN or signUP
let isUPorIN = 'IN';

// data_base user
const db = localStorage.getItem('user_data');
const users = JSON.parse(db) || [];


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
if (uName) uName.addEventListener('input', validateName);
if (uEmailIN) uEmailIN.addEventListener('input', validateEmail);
if (uEmailUP) uEmailUP.addEventListener('input', validateEmail);
if (uPassIN) uPassIN.addEventListener('input', validatePass);
if (uPassUP) uPassUP.addEventListener('input', validatePass);
if (uCPass) uCPass.addEventListener('input', validateCPass);

forms.forEach(e => {
    e.addEventListener('submit', j => {
        j.preventDefault();
    });
});

// sign up button
if (buttons[0]) buttons[0].addEventListener('click', signUP);
// sign in button
if (buttons[1]) buttons[1].addEventListener('click', signIN);


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

function validatePass(){
    // get the page (Sign IN or Sign UP) of the password
    const passELEMENT = document.getElementById('uPass' + isUPorIN);
    const pass = passELEMENT.value;
    passELEMENT.style.border = "1px solid green";
    destroyError(passELEMENT, 'input_error');
    
    // min length
    if (pass.length < 8 && isUPorIN === 'UP'){
        passELEMENT.style.border = "1px solid red";
        addError('Tamanho mínimo: 8 caracteres!', passELEMENT);
    }

    // if is empty
    if(pass === ''){
        passELEMENT.style.border = "1px solid red";
        addError('Digite uma senha!', passELEMENT);
    }
}

function validateCPass(){
    const pass = uPassUP.value;
    const cPass = uCPass.value;

    uCPass.style.border = "1px solid green"
    destroyError(uCPass, 'input_error');

    if (cPass !== pass || cPass == ''){
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

    // if not exist invalid inputs
    if(!hasInvalidInputs) {
        // sign up method
        if(isUPorIN == 'UP'){
            trySignUP();
        }
        // sign in method
        else{
            trySignIN();
        }
    }
}

function trySignUP(){
    // verify if email already exists
    if(emailAE()) { 
        addError('Email já cadastrado!', document.getElementById('btn2 sUP'));
    }
    else{ 
        // push data to database
        pushUserData();
        window.location.href = "index.html";
    }
}

function emailAE(){
    let aExists = false;
    users.forEach(u => {
        if(u.email === uEmailUP.value){
            aExists = true;
        }
    })
    return aExists;
}

function pushUserData(){
    const user = {
        name: uName.value,
        email: uEmailUP.value,
        pass: uPassUP.value
    }

    // save user_data on localStorage
    users.push(user);
    localStorage.setItem('user_data', JSON.stringify(users));
    localStorage.setItem('login_status', "true");
}

function trySignIN(){
    const email = uEmailIN.value;
    const pass = uPassIN.value;
    let login_s = false;
    
    // compare pass and email
    users.forEach(u => {
        if(u.email === email && u.pass === pass){
            login_s = true;
        }
    })

    if (login_s) {
        window.location.href = 'index.html';
    }
    else{
        addError('Email ou senha incorretos!', document.getElementById('btn2 sIN'));
    }
}