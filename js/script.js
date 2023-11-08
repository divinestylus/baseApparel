/** Global constants */
const CARD_FORM_ELEMENT = document.querySelector('.card-form'),
      CARD_INPUT_ELEMENT = document.querySelector('.card-form-input'),
      CARD_ERROR_MESSAGE_ELEMENT = document.querySelector('.card-form-error-message'),
      CARD_ERROR_ICON_ELEMENT =document.querySelector('.card-form-error-icon'),
      EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      

/** Functions section */

/**
 * This function removes the error message if email is incorrect
 */
function addErrorMsg(){
    CARD_ERROR_MESSAGE_ELEMENT.classList.add('show-card-form-error-message');
    CARD_ERROR_ICON_ELEMENT.classList.add('show-card-form-error-icon');
    CARD_INPUT_ELEMENT.classList.add('card-form-error-input')
}

/**
 * This function removes the error message if email is correct
 */
function removeErrorMsg(){
    if (CARD_ERROR_MESSAGE_ELEMENT.classList.contains('show-card-form-error-message')){
        CARD_ERROR_MESSAGE_ELEMENT.classList.remove('show-card-form-error-message');
        CARD_ERROR_ICON_ELEMENT.classList.remove('show-card-form-error-icon');
        CARD_INPUT_ELEMENT.classList.remove('card-form-error-input')
    }
}

/**
 * 
 * @param {string} event - Represents form submission
 * @returns {boolean}
 */
function validateEmail(event){
    event.preventDefault(); /** Prevent form from validating by default */
    if (EMAIL_PATTERN.test(CARD_INPUT_ELEMENT.value)) {
        CARD_INPUT_ELEMENT.value = "";
        removeErrorMsg();
        return true;
    }
    else {
        addErrorMsg();
        return false;
    }
}


/** Listeners section */
CARD_FORM_ELEMENT.addEventListener('submit', validateEmail);