var formularyLogin = document.getElementById("formulary-login");
document.getElementById("input-username").onfocus = function () { return animationSvgOnTranslateLeft("input-username", "icon-svg-user"); };
document.getElementById("input-password").onfocus = function () { return animationSvgOnTranslateLeft("input-password", "icon-svg-password"); };
formularyLogin.addEventListener("submit", function (event) {
    event.preventDefault();
});
var loginFormValidation = function () {
    var usernameInput = document.getElementById("input-username");
    var userPasswordInput = document.getElementById("input-password");
    var usernameInputError = document.getElementById("username-error");
    var passwordInputError = document.getElementById("password-error");
    validateInputForm(usernameInput, usernameInputError);
    validateInputForm(userPasswordInput, passwordInputError);
};
var validateInputForm = function (input, span) {
    if (input.value.trim().length === 0) {
        input.classList.add("input-error");
        if (span) {
            span.innerHTML = 'This field is required';
            span.style.display = 'block';
            span.style.visibility = 'visible';
            span.classList.add("label-error-active");
        }
    }
    else {
        if (span) {
            span.innerHTML = "";
            span.style.display = 'none';
            span.style.visibility = 'hidden';
        }
    }
};
function animationSvgOnTranslateLeft(elementFocus, nextElement) {
    var elementWithFocus = document.getElementById(elementFocus);
    var elementAnimated = document.getElementById(nextElement);
    if (!elementWithFocus || !elementAnimated) {
        console.error('Elementos não encontrados');
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
