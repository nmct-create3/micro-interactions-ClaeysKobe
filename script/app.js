let email = {},
  password = {},
  signInButton;

function getDOMElements() {
  // password
  password.input = document.querySelector(".js-input-field");
  password.label = document.querySelector(".js-password-label");
  password.switch = document.querySelector(".js-toggle-password");
  password.errorMeassage = document.querySelector(".js-password-error");
  // email
  email.input = document.querySelector(".js-email-input");
  email.label = document.querySelector(".js-email-label");
  email.errorMeassage = document.querySelector(".js-email-error");
  // button
  signInButton = document.querySelector(".js-sign-in-button");
  // enable listeners
  enableListeners();
}

const addErrors = function (type) {
  type.input.classList.add("has-error");
  type.label.classList.add("has-error");
};

const removeErrors = function (type) {
  type.input.classList.remove("has-error");
  type.label.classList.remove("has-error");
  type.errorMeassage.innerHTML = "";
};

const doubleCheckEmail = function () {
  if (cheker(email)) {
    removeErrors(email);
    email.input.removeEventListener("input", doubleCheckEmail);
  }
};

const doubleCheckPassword = function () {
  if (cheker(password)) {
    removeErrors(password);
    password.input.removeEventListener("input", doubleCheckPassword);
  }
};

const cheker = function (type) {
  value = type.input.value;
  if (value == "") {
    addErrors(type);
    type.errorMeassage.innerHTML = "This field is required";
    return false;
  } else if (type == email && !isValidEmailAddress(value)) {
    addErrors(type);
    type.errorMeassage.innerHTML = "Invalid emailaddress";
    return false;
  } else if (type == password && !isValidPassword(value)) {
    addErrors(type);
    type.errorMeassage.innerHTML = "Invalid password";
    return false;
  } else {
    return true;
  }
};

const isValidEmailAddress = function (emailAddress) {
  // Basis manier om e-mailadres te checken.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isValidPassword = function (password) {
  if (password.length > 1) {
    return true;
  } else {
    return false;
  }
};

const clickButton = function () {
  signInButton.addEventListener("click", function () {
    event.preventDefault();
    let a = cheker(email);
    let b = cheker(password);
    if (a && b) {
      console.log("Email " + email.input.value + " \nPassword: " + password.input.value);
    }
  });
};

function enableListeners() {
  blurListenerEmail();
  blurListenerPassword();
  clickButton();
}

function blurListenerEmail() {
  email.input.addEventListener("blur", function () {
    if (!cheker(email)) {
      email.input.addEventListener("input", doubleCheckEmail);
    } else {
      removeErrors(email);
    }
  });
}

function blurListenerPassword() {
  password.input.addEventListener("blur", function () {
    if (!cheker(password)) {
      password.input.addEventListener("input", doubleCheckPassword);
    } else {
      removeErrors(password);
    }
  });
}

function handleFloatingLabel() {}

function handlePasswordSwitcher() {
  password.switch.addEventListener("change", function () {
    if (password.switch.checked == true) {
      // console.log('checked');
      password.input.setAttribute("type", "text");
    } else {
      // console.log('not checked');
      password.input.setAttribute("type", "password");
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

document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded!");
  getDOMElements();
  handleFloatingLabel();
  handlePasswordSwitcher();
});
