function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
    let passwordSwitch = document.querySelector('.js-toggle-password');
    let passwordInput = document.querySelector('.js-input-field');
    passwordSwitch.addEventListener('click', function () {
        if (passwordSwitch.checked == true) {
            // console.log('checked');
            passwordInput.setAttribute('type', 'text');
        } else {
            // console.log('not checked');
            passwordInput.setAttribute('type', 'password');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});