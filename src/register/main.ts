let formularyContainer = document.querySelector("#formulary-container-inputs-register")! as HTMLFormElement

let firstNameInput = document.getElementById("first-name") as HTMLInputElement
let lastNameInput = document.getElementById("last-name") as HTMLInputElement
let birthDateInput = document.getElementById("birth-date") as HTMLInputElement
let countryInput = document.getElementById("country") as HTMLInputElement
let cityInput = document.getElementById("city") as HTMLInputElement
let emailInput = document.getElementById("e-mail") as HTMLInputElement
let passwordInput = document.getElementById("password") as HTMLInputElement
let repeatPasswordInput = document.getElementById("repeat-password") as HTMLInputElement


interface IUser {
    firstName: string,
    lastName: string,
    birthDate: Date,
    country: string,
    city: string,
    email: string,
    password: string
}

formularyContainer!.onsubmit = (event: Event) => {
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
        localStorage.clear()
        localStorage.setItem("user", JSON.stringify(userDataRegistered))
    }
}

function formularyRegisterValidation(): boolean {
    if (!(isValidName(firstNameInput, lastNameInput), isValidDate(birthDateInput), isValidCountryAndCity(countryInput, cityInput), isValidEmail(emailInput), isValidPassword(passwordInput, repeatPasswordInput))) false

    return true
}

function isValidInput(input: HTMLInputElement): boolean {

    if (input.value.trim().length === 0) false

    else if (input.value.trim() !== input.value) false
    return true

}

function isValidPassword(password: HTMLInputElement, confirmPassword: HTMLInputElement) {

    if (!(isValidInput(password) && isValidInput(confirmPassword))) false
    if (!(password === confirmPassword)) false
    if (!(8 > password.value.length || password.value.length > 128)) false

    return true
}

function isValidName(firstName: HTMLInputElement, lastName: HTMLInputElement): boolean {
    const regexJustLetters = /^[a-zA-Z]+$/i

    if (!(isValidInput(firstName) && isValidInput(lastName))) false
    if (!(regexJustLetters.test(firstName.value) && regexJustLetters.test(lastName.value))) false

    return true
}

function isValidDate(birthDate: HTMLInputElement): boolean {
    if (!(isValidInput(birthDate))) false;
    if (!(new Date(birthDate.value).toLocaleDateString('pt-BR'))) false
    return true
}

function isValidEmail(email: HTMLInputElement): boolean {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/

    if (!(regexEmail.test(email.value))) false

    return true
}

function isValidCountryAndCity(country: HTMLInputElement, city: HTMLInputElement): boolean {

    const regexCity = /^[a-zA-Z]+$/i
    const regexCountry = /^[A-Za-z]{2}$/


    if (!(regexCountry.test(country.value.toUpperCase()))) false
    if (!(regexCity.test(city.value))) false

    return true
}
