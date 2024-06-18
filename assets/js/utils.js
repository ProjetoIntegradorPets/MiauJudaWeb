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

// add error if not exists
export function addError(msg, ref){
    if(verifyNextElement(ref, 'input_error', false)) {
        insertAfter(createError(msg), ref);
    }else{
        ref.nextElementSibling.textContent = msg;
    }
}

// destroy error if exists 
export function destroyError(ref, cl){
    if (verifyNextElement(ref, cl, true)) return ref.nextElementSibling.remove();
}

// verify nextElement exists && verify the name of the class
export function verifyNextElement(ref, cl, contains){
    if (contains) {return ref.nextElementSibling && ref.nextElementSibling.classList.contains(cl);}
    else{return ref.nextElementSibling && !ref.nextElementSibling.classList.contains(cl);}
}