
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
const uNameIN = document.getElementById("uNameIN");
const uNameUP = document.getElementById("uNameUP");

const uEmail = document.getElementById("uEmail");

const uPassIN = document.getElementById("uPassIN");
const uPassUP = document.getElementById("uPassUP");

const uCPass = document.getElementById("uCPass");
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/;

// dynamic event listeners
uNameIN.addEventListener('input', () => {
    validateName('IN');
});
uNameUP.addEventListener('input', () => {
    validateName('UP');
});
uEmail.addEventListener('input', validateEmail);

// uPass.addEventListener('input', validatePass);

// uCPass.addEventListener('input', validateCPass);

// functions
function validateName(type){
    let nameELEMENT = document.getElementById('uName' + type);
    let name = nameELEMENT.value;

    if(name === '' || name.length < 6){
        nameELEMENT.style.border = "1px solid red";
        // erro
    }
    else{
        nameELEMENT.style.border = "1px solid green";
    }
}

function validateEmail(){
    let email = email.value;

    if(email === ''){
        uEmail.style.border = "1px solid red";
        // erro
    }
    if(emailRegex.test(email)){
        uEmail.style.border = "1px solid green";
    }
    else{
        uEmail.style.border = "1px solid red";
        // erro
    }
}
