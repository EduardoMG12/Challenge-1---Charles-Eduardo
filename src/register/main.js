var formularyContainer = document.querySelector("#formulary-container-inputs-register");
var firstNameInput = document.getElementById("first-name"); // check
var lastNameInput = document.getElementById("last-name"); // check
var birthDateInput = document.getElementById("birth-date"); // check
var countryInput = document.getElementById("country");
var cityInput = document.getElementById("city"); // check
var emailInput = document.getElementById("e-mail"); // check
var passwordInput = document.getElementById("password"); // check
var repeatPasswordInput = document.getElementById("repeat-password"); // check
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
        localStorage.setItem("user", JSON.stringify(userDataRegistered));
    }
};
function formularyRegisterValidation() {
    if (!(isValidName(firstNameInput, lastNameInput), isValidDate(birthDateInput), isValidCountryAndCity(countryInput, cityInput), isValidEmail(emailInput), isValidPassword(passwordInput, repeatPasswordInput)))
        false;
    return true;
}
function isValidInput(input) {
    if (input.value.trim().length === 0)
        false;
    else if (input.value.trim() !== input.value)
        false;
    return true;
}
function isValidPassword(password, confirmPassword) {
    if (!(isValidInput(password) && isValidInput(confirmPassword)))
        false;
    if (!(password === confirmPassword))
        false;
    if (!(8 > password.value.length || password.value.length > 128))
        false;
    return true;
}
function isValidName(firstName, lastName) {
    var regexJustLetters = /^[a-zA-Z]+$/i;
    if (!(isValidInput(firstName) && isValidInput(lastName)))
        false;
    if (!(regexJustLetters.test(firstName.value) && regexJustLetters.test(lastName.value)))
        false;
    return true;
}
function isValidDate(birthDate) {
    if (!(isValidInput(birthDate)))
        false;
    if (!(new Date(birthDate.value).toLocaleDateString('pt-BR')))
        false;
    return true;
}
function isValidEmail(email) {
    var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    if (!(regexEmail.test(email.value)))
        false;
    return true;
}
function isValidCountryAndCity(country, city) {
    var regexCity = /^[a-zA-Z]+$/i;
    var regexCountry = /^[A-Za-z]{2}$/;
    if (!(regexCountry.test(country.value.toUpperCase())))
        false;
    if (!(regexCity.test(city.value)))
        false;
    return true;
}
