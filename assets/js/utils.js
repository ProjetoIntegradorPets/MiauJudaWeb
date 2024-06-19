/*----------------- Geral Config -----------------*/
// insert a element After 
export function insertAfter(newElement, reference) {
    reference.parentNode.insertBefore(newElement, reference.nextSibling);
}

// create error msg
export function createError(msg){
    const el = document.createElement('span');
    el.classList.add('input_error');
    el.textContent = msg;
    el.style.display = 'block';
    el.style.visibility = 'visible';
    return el
}

// add error if not exists // cl = classe
export function addError(msg, ref, cl = 'input_error'){
    // verify if next element exists and has a class CL
    if(ref.nextElementSibling && verifyClass(ref, cl)) {
        ref.nextElementSibling.textContent = msg;
    }
    else{
        // create error message
        insertAfter(createError(msg), ref);
    }
}

// destroy error if exists 
export function destroyError(ref, cl){
    if (verifyClass(ref, cl)) return ref.nextElementSibling.remove();
}

// Compare class name
export function verifyClass(ref, cl){
    if(ref.nextElementSibling) return ref.nextElementSibling.classList.contains(cl);
}