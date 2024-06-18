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

// add error 
export function addError(msg, ref){
    ref.nextElementSibling.textContent = msg;
    if(ref.nextElementSibling && !ref.nextElementSibling.classList.contains('input_error')) insertAfter(createError(msg), ref);
}
// destroy error
export function destroyError(ref){
    if (ref && ref.nextElementSibling) return ref.nextElementSibling.remove();
}
