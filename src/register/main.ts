// remember i will implement localStorage in login window with username and email
// fix svg animation to login window

let formularyContainer = document.querySelector("#formulary-container-inputs-register")! as HTMLFormElement

let firstNameInput = document.getElementById("first-name") as HTMLInputElement
let lastNameInput = document.getElementById("last-name") as HTMLInputElement
let birthDateInput = document.getElementById("birth-date") as HTMLInputElement
let countryInput = document.getElementById("country") as HTMLInputElement
let cityInput = document.getElementById("city") as HTMLInputElement
let emailInput = document.getElementById("e-mail") as HTMLInputElement
let passwordInput = document.getElementById("password") as HTMLInputElement
let repeatPasswordInput = document.getElementById("repeat-password") as HTMLInputElement

let firstNameError = document.getElementById("firstname-error") as HTMLSpanElement
let lastNameError = document.getElementById("lastname-error") as HTMLSpanElement
let birthDateError = document.getElementById("birthdate-error") as HTMLSpanElement
let countryError = document.getElementById("country-error") as HTMLSpanElement
let cityError = document.getElementById("city-error") as HTMLSpanElement
let emailError = document.getElementById("email-error") as HTMLSpanElement
let passwordError = document.getElementById("password-error") as HTMLSpanElement
let confirmPasswordError = document.getElementById("confirm-password-error") as HTMLSpanElement

interface IUser {
    firstName: string,
    lastName: string,
    birthDate: Date,
    country: string,
    city: string,
    email: string,
    password: string
}

document!.onkeydown = (event) => {
    console.log(event.code)
    if (event.code === "Enter") {
        event.preventDefault();
        if (formularyRegisterValidation()) {

            const userDataRegistered: IUser = {
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                birthDate: new Date(birthDateInput.value),
                country: countryInput.value,
                city: cityInput.value,
                email: emailInput.value,
                password: passwordInput.value,

            }
            setLocalStorage("user", userDataRegistered)
            window.location.href = "/"
        }
    }
}

formularyContainer!.onsubmit = (event: Event) => {
    event.preventDefault();

    console.log(formularyRegisterValidation())
    if (formularyRegisterValidation()) {

        const userDataRegistered: IUser = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            birthDate: new Date(birthDateInput.value),
            country: countryInput.value,
            city: cityInput.value,
            email: emailInput.value,
            password: passwordInput.value,

        }
        setLocalStorage("user", userDataRegistered)
        window.location.href = "/"
    }
}




function setLocalStorage(key: string, value: any) {
    localStorage.clear()
    localStorage.setItem(key, JSON.stringify(value))
}
function formularyRegisterValidation(): boolean {
    const functionArray = [isValidName(firstNameInput, firstNameError, lastNameInput, lastNameError), isValidDate(birthDateInput, birthDateError), isValidCountryAndCity(countryInput, countryError, cityInput, cityError), isValidEmail(emailInput, emailError), isValidPassword(passwordInput, passwordError, repeatPasswordInput, confirmPasswordError)]

    return functionArray.every((valor) => valor)
}

function isValidInput(input: HTMLInputElement, span: HTMLSpanElement): boolean {

    if (input.value.trim().length === 0) {
        showLabelError(span, "This field is mandatory.")
        return false
    }

    else if (input.value.trim() !== input.value) {
        showLabelError(span, "This field cannot have blank spaces either before or after its value.")
        return false
    }
    hiddenLabelError(span)
    return true

}

function isValidPassword(password: HTMLInputElement, passwordError: HTMLSpanElement, confirmPassword: HTMLInputElement, confirmPasswordError: HTMLSpanElement) {

    if (!(isValidInput(password, passwordError) && isValidInput(confirmPassword, confirmPasswordError))) false
    if (!(password.value === confirmPassword.value)) {
        showLabelError(confirmPasswordError, "The passwords don't match.")
        return false
    }
    if ((8 > password.value.length || password.value.length > 128)) {
        showLabelError(confirmPasswordError, "Your password must have a minimum of 8 characters and a maximum of 128 characters.")
        return false
    }
    hiddenLabelError(passwordError)
    hiddenLabelError(confirmPasswordError)
    console.log("isValidPassword")
    return true
}

function isValidName(firstName: HTMLInputElement, firstNameError: HTMLSpanElement, lastName: HTMLInputElement, lastNameError: HTMLSpanElement): boolean {
    const regexJustLetters = /^[a-zA-Z]+$/i

    if (!(isValidInput(firstName, firstNameError) && isValidInput(lastName, lastNameError))) false
    if (!(regexJustLetters.test(firstName.value) && regexJustLetters.test(lastName.value))) {
        showLabelError(firstNameError, "Your name must not contain any numbers or special characters.")
        showLabelError(lastNameError, "Your name must not contain any numbers or special characters.")
        return false
    }
    hiddenLabelError(firstNameError)
    hiddenLabelError(lastNameError)
    console.log("isValidName")
    return true
}

function isValidDate(birthDate: HTMLInputElement, birthDateError: HTMLSpanElement): boolean {
    const regexDate = /\d{4}\-\d{2}\-\d{2}/
    if (!(isValidInput(birthDate, birthDateError))) false;
    if (!(new Date(birthDate.value).toLocaleDateString('en-US'))) {
        showLabelError(birthDateError, "This date is invalid")
        return false
    }
    if (!regexDate.test(birthDate.value)) {
        showLabelError(birthDateError, `There is no such date`)
        console.log(birthDate.value)
        return false
    }
    hiddenLabelError(birthDateError)
    console.log("isValidDate")
    return true
}

function isValidEmail(email: HTMLInputElement, emailError: HTMLSpanElement): boolean {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/

    if (!(regexEmail.test(email.value))) {
        showLabelError(emailError, "This email is not valid")
        return false
    }

    hiddenLabelError(emailError)
    console.log("isValidEmail")
    return true
}

function isValidCountryAndCity(country: HTMLInputElement, countryError: HTMLSpanElement, city: HTMLInputElement, cityError: HTMLSpanElement): boolean {
    const regexCity = /^[a-zA-Z]+$/i
    const regexCountry = /^[A-Za-z]{2}$/

    if (!(isValidInput(city, cityError))) false;
    if (!(isValidInput(country, countryError))) false;
    if (!(regexCountry.test(country.value.toUpperCase()))) {
        showLabelError(countryError, "The state must have 2 letters")
        return false
    }
    if (!(regexCity.test(city.value))) {
        showLabelError(cityError, "This city doesn't exist")
        return false
    }

    hiddenLabelError(countryError)
    hiddenLabelError(cityError)
    console.log("isValidCountryCity")
    return true
}

function showLabelError(span: HTMLSpanElement, message: string) {
    span.innerHTML = message;
    span.style.display = 'block';
    span.style.visibility = 'visible';
    span.classList.add("label-error-active")
}

function hiddenLabelError(span: HTMLSpanElement) {
    span.innerHTML = "";
    span.style.display = 'none';
    span.style.visibility = 'hidden';
    span.classList.remove("label-error-active")
}