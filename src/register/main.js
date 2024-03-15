// remember i will implement localStorage in login window with username and email
// rememeber translate errors message to english
// remember implement key enter for send form and will fix svg animation to login window
var formularyContainer = document.querySelector("#formulary-container-inputs-register");
var firstNameInput = document.getElementById("first-name");
var lastNameInput = document.getElementById("last-name");
var birthDateInput = document.getElementById("birth-date");
var countryInput = document.getElementById("country");
var cityInput = document.getElementById("city");
var emailInput = document.getElementById("e-mail");
var passwordInput = document.getElementById("password");
var repeatPasswordInput = document.getElementById("repeat-password");
var firstNameError = document.getElementById("firstname-error");
var lastNameError = document.getElementById("lastname-error");
var birthDateError = document.getElementById("birthdate-error");
var countryError = document.getElementById("country-error");
var cityError = document.getElementById("city-error");
var emailError = document.getElementById("email-error");
var passwordError = document.getElementById("password-error");
var confirmPasswordError = document.getElementById("confirm-password-error");
formularyContainer.onsubmit = function (event) {
    event.preventDefault();
    console.log(formularyRegisterValidation());
    if (formularyRegisterValidation()) {
        var userDataRegistered = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            birthDate: new Date(birthDateInput.value),
            country: countryInput.value,
            city: cityInput.value,
            email: emailInput.value,
            password: passwordInput.value,
        };
        localStorage.clear();
        localStorage.setItem("user", JSON.stringify(userDataRegistered));
        window.location.href = "/";
    }
};
function formularyRegisterValidation() {
    var functionArray = [isValidName(firstNameInput, firstNameError, lastNameInput, lastNameError), isValidDate(birthDateInput, birthDateError), isValidCountryAndCity(countryInput, countryError, cityInput, cityError), isValidEmail(emailInput, emailError), isValidPassword(passwordInput, passwordError, repeatPasswordInput, confirmPasswordError)];
    return functionArray.every(function (valor) { return valor; });
}
function isValidInput(input, span) {
    if (input.value.trim().length === 0) {
        showLabelError(span, "este campo é obrigatoro");
        return false;
    }
    else if (input.value.trim() !== input.value) {
        showLabelError(span, "não se pode ter espaço antes e nem depois desse campo");
        return false;
    }
    hiddenLabelError(span);
    return true;
}
function isValidPassword(password, passwordError, confirmPassword, confirmPasswordError) {
    if (!(isValidInput(password, passwordError) && isValidInput(confirmPassword, confirmPasswordError)))
        false;
    if (!(password.value === confirmPassword.value)) {
        showLabelError(confirmPasswordError, "as senhas não coincidem");
        return false;
    }
    if ((8 > password.value.length || password.value.length > 128)) {
        showLabelError(confirmPasswordError, "a sua senha deve ter no mínimo 8 caracteres e no máximo 128 caracteres");
        return false;
    }
    hiddenLabelError(passwordError);
    hiddenLabelError(confirmPasswordError);
    console.log("isValidPassword");
    return true;
}
function isValidName(firstName, firstNameError, lastName, lastNameError) {
    var regexJustLetters = /^[a-zA-Z]+$/i;
    if (!(isValidInput(firstName, firstNameError) && isValidInput(lastName, lastNameError)))
        false;
    if (!(regexJustLetters.test(firstName.value) && regexJustLetters.test(lastName.value))) {
        showLabelError(firstNameError, "O seu nome de usuário não pode ter números e nem caracteres especiais.");
        showLabelError(lastNameError, "O seu nome de usuário não pode ter números e nem caracteres especiais.");
        return false;
    }
    hiddenLabelError(firstNameError);
    hiddenLabelError(lastNameError);
    console.log("isValidName");
    return true;
}
function isValidDate(birthDate, birthDateError) {
    var regexDate = /\d{2}\/\d{2}\/\d{4}/;
    if (!(isValidInput(birthDate, birthDateError)))
        false;
    if (!(new Date(birthDate.value).toLocaleDateString('pt-BR'))) {
        showLabelError(birthDateError, "Esta data não é válida");
        return false;
    }
    if (!(regexDate.test(birthDate.value))) {
        showLabelError(birthDateError, "Esta data não é existe");
        return false;
    }
    hiddenLabelError(birthDateError);
    console.log("isValidDate");
    return true;
}
function isValidEmail(email, emailError) {
    var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    if (!(regexEmail.test(email.value))) {
        showLabelError(emailError, "Este email não é valido");
        return false;
    }
    hiddenLabelError(emailError);
    console.log("isValidEmail");
    return true;
}
function isValidCountryAndCity(country, countryError, city, cityError) {
    var regexCity = /^[a-zA-Z]+$/i;
    var regexCountry = /^[A-Za-z]{2}$/;
    if (!(isValidInput(city, cityError)))
        false;
    if (!(isValidInput(country, countryError)))
        false;
    if (!(regexCountry.test(country.value.toUpperCase()))) {
        showLabelError(countryError, "Esta estado não existe");
        return false;
    }
    if (!(regexCity.test(city.value))) {
        showLabelError(cityError, "Esta cidade não existe");
        return false;
    }
    hiddenLabelError(countryError);
    hiddenLabelError(cityError);
    console.log("isValidCountryCity");
    return true;
}
function showLabelError(span, message) {
    span.innerHTML = message;
    span.style.display = 'block';
    span.style.visibility = 'visible';
    span.classList.add("label-error-active");
}
function hiddenLabelError(span) {
    span.innerHTML = "";
    span.style.display = 'none';
    span.style.visibility = 'hidden';
    span.classList.remove("label-error-active");
}
