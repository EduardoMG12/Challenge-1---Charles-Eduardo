var formularyLogin = document.getElementById("formulary-login");
var usernameInput = document.getElementById("input-username");
var userPasswordInput = document.getElementById("input-password");
var usernameInputError = document.getElementById("username-error");
var passwordInputError = document.getElementById("password-error");
var messageErrorFormulary1 = document.getElementById("message-error-formulary1");
var messageErrorFormulary2 = document.getElementById("message-error-formulary2");
document.getElementById("input-username").onfocus = function () { return animationSvgOnTranslateLeft("input-username", "icon-svg-user"); };
document.getElementById("input-password").onfocus = function () { return animationSvgOnTranslateLeft("input-password", "icon-svg-password"); };
formularyLogin.addEventListener("submit", function (event) {
    event.preventDefault();
});
document.onkeydown = function (event) {
    if (event.code === "Enter") {
        loginFormValidation();
    }
};
function loginFormValidation() {
    validateLocalStorage();
}
;
function showErroInput(input, erroMessage, span) {
    if (input) {
        input.classList.add("input-error");
        if (span) {
            span.innerHTML = erroMessage;
            span.style.display = 'block';
            span.style.visibility = 'visible';
            span.classList.add("label-error-active");
        }
    }
}
function hiddenErroInput(input, span) {
    if (input) {
        input.classList.remove("input-error");
        if (span) {
            span.innerHTML = "";
            span.style.display = 'none';
            span.style.visibility = 'hidden';
        }
    }
}
var validateInputForm = function (input, span) {
    if (input.value.trim().length !== input.value.length) {
        showErroInput(input, "The field must not contain any spaces before or after the value", span);
        return false;
    }
    if (input.value.trim().length == 0) {
        showErroInput(input, "required field", span);
        return false;
    }
    if (input.value.trim().length !== input.value.length) {
        showErroInput(input, "This username/password is incorrect", span);
        return false;
    }
    else {
        hiddenErroInput(input, span);
        return true;
    }
};
function animationSvgOnTranslateLeft(elementFocus, nextElement) {
    var elementWithFocus = document.getElementById(elementFocus);
    var elementAnimated = document.getElementById(nextElement);
    if (!elementWithFocus || !elementAnimated) {
        console.error('Elements not found');
        return;
    }
    elementWithFocus.onfocus = function () {
        elementAnimated.classList.add("animationTranslateLeft");
    };
    elementWithFocus.onblur = function () {
        if (elementWithFocus.value) {
            return;
        }
        elementAnimated.classList.remove('animationTranslateLeft');
    };
}
;
function validateLocalStorage() {
    var userRegistred = localStorage.getItem("user");
    if (userRegistred) {
        var recoveryUserRegistred = JSON.parse(userRegistred);
        login(recoveryUserRegistred);
    }
    else {
        messageErrorFormulary1.classList.add("message-error-formulary-visible");
        messageErrorFormulary2.classList.add("message-error-formulary-visible");
        hiddenErroInput(usernameInput, usernameInputError);
        hiddenErroInput(userPasswordInput, passwordInputError);
    }
}
function login(recoveryUserRegistred) {
    var functionArray = [validateInputForm(usernameInput, usernameInputError), validateInputForm(userPasswordInput, passwordInputError)];
    // amanha arrumar toda essa logica, se cosnseguir comecar a pagina 3 
    if (functionArray.every(function (res) { return res; })) {
        if ((recoveryUserRegistred.firstName.concat(recoveryUserRegistred.lastName) === usernameInput.value || recoveryUserRegistred.email === usernameInput.value) && recoveryUserRegistred.password === userPasswordInput.value) {
            // login bem sucedido
            messageErrorFormulary1.classList.remove("message-error-formulary-visible");
            messageErrorFormulary2.classList.remove("message-error-formulary-visible");
            hiddenErroInput(usernameInput, usernameInputError);
            hiddenErroInput(userPasswordInput, passwordInputError);
            window.location.href = "/src/home/index.html";
        }
        else {
            messageErrorFormulary1.classList.add("message-error-formulary-visible");
            messageErrorFormulary2.classList.add("message-error-formulary-visible");
            usernameInput.classList.remove("input-error");
            userPasswordInput.classList.remove("input-error");
        }
    }
    else {
        messageErrorFormulary1.classList.add("message-error-formulary-visible");
        messageErrorFormulary2.classList.add("message-error-formulary-visible");
        usernameInput.classList.add("input-error");
        userPasswordInput.classList.add("input-error");
    }
}
