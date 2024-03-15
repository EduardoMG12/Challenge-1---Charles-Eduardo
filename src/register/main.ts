// remember i will implement localStorage in login window with username and email
// rememeber translate errors message to english
// remember implement key enter for send form and will fix svg animation to login window

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
        localStorage.clear()
        localStorage.setItem("user", JSON.stringify(userDataRegistered))
        window.location.href = "/"
    }
}
function formularyRegisterValidation(): boolean {
    const functionArray = [isValidName(firstNameInput, firstNameError, lastNameInput, lastNameError), isValidDate(birthDateInput, birthDateError), isValidCountryAndCity(countryInput, countryError, cityInput, cityError),  isValidEmail(emailInput, emailError), isValidPassword(passwordInput, passwordError, repeatPasswordInput, confirmPasswordError)] 

    return functionArray.every((valor) => valor)
}

function isValidInput(input: HTMLInputElement, span: HTMLSpanElement): boolean {

    if (input.value.trim().length === 0) {
        showLabelError(span, "este campo é obrigatoro")
        return false
    }
    
    else if (input.value.trim() !== input.value){ 
        showLabelError(span, "não se pode ter espaço antes e nem depois desse campo")
        return false
    }
    hiddenLabelError(span)
    return true

}

function isValidPassword(password: HTMLInputElement, passwordError: HTMLSpanElement, confirmPassword: HTMLInputElement, confirmPasswordError: HTMLSpanElement) {

    if (!(isValidInput(password, passwordError) && isValidInput(confirmPassword, confirmPasswordError))) false
    if (!(password.value === confirmPassword.value)) {
        showLabelError(confirmPasswordError, "as senhas não coincidem")
        return false}
    if ((8 > password.value.length || password.value.length > 128)) {
        showLabelError(confirmPasswordError, "a sua senha deve ter no mínimo 8 caracteres e no máximo 128 caracteres")    
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
    if (!(regexJustLetters.test(firstName.value) && regexJustLetters.test(lastName.value))){ 
        showLabelError(firstNameError, "O seu nome de usuário não pode ter números e nem caracteres especiais.")
        showLabelError(lastNameError, "O seu nome de usuário não pode ter números e nem caracteres especiais.")
        return false
    }
    hiddenLabelError(firstNameError)
    hiddenLabelError(lastNameError)
    console.log("isValidName")
    return true
}

function isValidDate(birthDate: HTMLInputElement, birthDateError: HTMLSpanElement): boolean {
    const regexDate = /\d{2}\/\d{2}\/\d{4}/
    if (!(isValidInput(birthDate, birthDateError))) false;
    if (!(new Date(birthDate.value).toLocaleDateString('pt-BR'))) {
        showLabelError(birthDateError, "Esta data não é válida")    
        return false
    }
    if (!(regexDate.test(birthDate.value))) {
        showLabelError(birthDateError, "Esta data não é existe")    
        return false
    }
    hiddenLabelError(birthDateError)
    console.log("isValidDate")
    return true
}

function isValidEmail(email: HTMLInputElement, emailError: HTMLSpanElement): boolean {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/

    if (!(regexEmail.test(email.value))){
        showLabelError(emailError, "Este email não é valido")
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
    if (!(regexCountry.test(country.value.toUpperCase()))){
        showLabelError(countryError, "Esta estado não existe")    
        return false
    }
    if (!(regexCity.test(city.value))){
        showLabelError(cityError, "Esta cidade não existe")    
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