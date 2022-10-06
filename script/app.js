let email = {},
    password = {},
    signInButton;

function getDOMElements() {
    // password
    password.input = document.querySelector('.js-input-field');
    password.label = document.querySelector('.js-password-label');
    password.switch = document.querySelector('.js-toggle-password');
    password.errorMeassage = document.querySelector('.js-password-error');
    // email
    email.input = document.querySelector('.js-email-input');
    email.label = document.querySelector('.js-email-label');
    email.errorMeassage = document.querySelector('.js-email-error');
    // button
    // signInButton = document.querySelector('.js-sign-in-button');
    // enable listeners
    enableListeners();
}

const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

function enableListeners() {
    blurListenerEmail();
    blurListenerPassword();
    // clickButton();
}

function blurListenerEmail() {
    email.input.addEventListener('blur', function () {
        if (email.input.value == '') {
            email.errorMeassage.innerHTML = 'This field is required';
            email.input.classList.add('has-error');
            email.label.classList.add('has-error');
        } else if (!isValidEmailAddress(email.input.value)) {
            email.errorMeassage.innerHTML = 'Please enter a valid email address';
            email.input.classList.add('has-error');
            email.label.classList.add('has-error');
        } else {
            email.errorMeassage.innerHTML = '';
            email.input.classList.remove('has-error');
            email.label.classList.remove('has-error');
        }
    });
}

function blurListenerPassword() {
    password.input.addEventListener('blur', function () {
        if (password.input.value == '') {
            password.errorMeassage.innerHTML = 'This field is required';
            password.input.classList.add('has-error');
            password.label.classList.add('has-error');
        } else {
            password.errorMeassage.innerHTML = '';
            password.input.classList.remove('has-error');
            password.label.classList.remove('has-error');
        }
    });
}

function clickButton() {
    signInButton.addEventListener('click', function () {
        handleFloatingLabel();
        handlePasswordSwitcher();
    });
}

function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
    password.switch.addEventListener('change', function () {
        if (password.switch.checked == true) {
            // console.log('checked');
            password.input.setAttribute('type', 'text');
        } else {
            // console.log('not checked');
            password.input.setAttribute('type', 'password');
        }
    });

    // ALTERNATIEF:
    /* 
    const passwordOptions = ['password', 'text'];

    passwordToggle.addEventListener('change', function () {
        passwordInput.type = passwordOptions[+this.checked];
    });
    */
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    getDOMElements();
    handleFloatingLabel();
    handlePasswordSwitcher();
});