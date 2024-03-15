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
document.onkeydown = function (event) {
    if (event.code === "Enter") {
        event.preventDefault();
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
            setLocalStorage("user", userDataRegistered);
            window.location.href = "/";
        }
    }
};
formularyContainer.onsubmit = function (event) {
    event.preventDefault();
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
        setLocalStorage("user", userDataRegistered);
        window.location.href = "/";
    }
};
function setLocalStorage(key, value) {
    localStorage.clear();
    localStorage.setItem(key, JSON.stringify(value));
}
function formularyRegisterValidation() {
    var functionArray = [isValidName(firstNameInput, firstNameError, lastNameInput, lastNameError), isValidDate(birthDateInput, birthDateError), isValidCountryAndCity(countryInput, countryError, cityInput, cityError), isValidEmail(emailInput, emailError), isValidPassword(passwordInput, passwordError, repeatPasswordInput, confirmPasswordError)];
    return functionArray.every(function (valor) { return valor; });
}
function isValidInput(input, span) {
    if (input.value.trim().length === 0) {
        showLabelError(span, "This field is mandatory.");
        return false;
    }
    else if (input.value.trim() !== input.value) {
        showLabelError(span, "This field cannot have blank spaces either before or after its value.");
        return false;
    }
    hiddenLabelError(span);
    return true;
}
function isValidPassword(password, passwordError, confirmPassword, confirmPasswordError) {
    if (!(isValidInput(password, passwordError) && isValidInput(confirmPassword, confirmPasswordError)))
        false;
    if (!(password.value === confirmPassword.value)) {
        showLabelError(confirmPasswordError, "The passwords don't match.");
        return false;
    }
    if ((8 > password.value.length || password.value.length > 128)) {
        showLabelError(confirmPasswordError, "Your password must have a minimum of 8 characters and a maximum of 128 characters.");
        return false;
    }
    hiddenLabelError(passwordError);
    hiddenLabelError(confirmPasswordError);
    return true;
}
function isValidName(firstName, firstNameError, lastName, lastNameError) {
    var regexJustLetters = /^[a-zA-Z]+$/i;
    if (!(isValidInput(firstName, firstNameError) && isValidInput(lastName, lastNameError)))
        false;
    if (!(regexJustLetters.test(firstName.value) && regexJustLetters.test(lastName.value))) {
        showLabelError(firstNameError, "Your name must not contain any numbers or special characters.");
        showLabelError(lastNameError, "Your name must not contain any numbers or special characters.");
        return false;
    }
    hiddenLabelError(firstNameError);
    hiddenLabelError(lastNameError);
    return true;
}
function isValidDate(birthDate, birthDateError) {
    var regexDate = /\d{4}\-\d{2}\-\d{2}/;
    if (!(isValidInput(birthDate, birthDateError)))
        false;
    if (!(new Date(birthDate.value).toLocaleDateString('en-US'))) {
        showLabelError(birthDateError, "This date is invalid");
        return false;
    }
    if (!regexDate.test(birthDate.value)) {
        showLabelError(birthDateError, "There is no such date");
        return false;
    }
    hiddenLabelError(birthDateError);
    return true;
}
function isValidEmail(email, emailError) {
    var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    if (!(regexEmail.test(email.value))) {
        showLabelError(emailError, "This email is not valid");
        return false;
    }
    hiddenLabelError(emailError);
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
        showLabelError(countryError, "The state must have 2 letters");
        return false;
    }
    if (!(regexCity.test(city.value))) {
        showLabelError(cityError, "This city doesn't exist");
        return false;
    }
    hiddenLabelError(countryError);
    hiddenLabelError(cityError);
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
