const formularyLogin = document.getElementById(
    "formulary-login"
) as HTMLFormElement;
const usernameInput = document.getElementById(
    "input-username"
) as HTMLInputElement;
const userPasswordInput = document.getElementById(
    "input-password"
) as HTMLInputElement;

const usernameInputError = document.getElementById(
    "username-error"
) as HTMLSpanElement;
const passwordInputError = document.getElementById(
    "password-error"
) as HTMLSpanElement;
const messageErrorFormulary1 = document.getElementById("message-error-formulary1") as HTMLSpanElement
const messageErrorFormulary2 = document.getElementById("message-error-formulary2") as HTMLSpanElement

document.getElementById("input-username")!.onfocus = () => animationSvgOnTranslateLeft("input-username", "icon-svg-user")
document.getElementById("input-password")!.onfocus = () => animationSvgOnTranslateLeft("input-password", "icon-svg-password")


formularyLogin.addEventListener("submit", (event: Event) => {
    event.preventDefault();

});

document!.onkeydown =(event) =>{
    console.log(event.code)
    if (event.code === "Enter") { 
        loginFormValidation()
    }
}


function loginFormValidation() {
     validateLocalStorage()
};

interface IValidateInputForm {
    input: HTMLInputElement,
    span?: HTMLSpanElement
}

function showErroInput(input: HTMLInputElement, erroMessage: string, span?: HTMLSpanElement) {
    if (input) {
        input.classList.add("input-error");
        if (span) {
            span.innerHTML = erroMessage;
            span.style.display = 'block';
            span.style.visibility = 'visible';
            span.classList.add("label-error-active")
        }
    }
}
function hiddenErroInput(input: HTMLInputElement, span?: HTMLSpanElement) {
    if (input) {
        input.classList.remove("input-error");
        if (span) {
            span.innerHTML = ""
            span.style.display = 'none';
            span.style.visibility = 'hidden';
        }
    }
}

const validateInputForm = (input: HTMLInputElement, span?: HTMLSpanElement) => {
    if (input.value.trim().length !== input.value.length) { // erro existem espacos antes ou depois do dado
        showErroInput(input, "O campo nao pode possuir espacos ou pontos", span)
        return false
    }
    if (input.value.trim().length == 0) { // o campo esta vazio
        showErroInput(input, "required field", span)
        return false
    }
    if (input.value.trim().length !== input.value.length) { // nao existe este usuario/senha
        showErroInput(input, "",  span)
        return false
    }
    else {
        hiddenErroInput(input, span)
        return true
    }
}

function animationSvgOnTranslateLeft(elementFocus: string, nextElement: string) {
    const elementWithFocus = document.getElementById(elementFocus) as HTMLInputElement
    const elementAnimated = document.getElementById(nextElement) as HTMLElement

    if (!elementWithFocus || !elementAnimated) {
        console.error('Elementos não encontrados');
        return;
    }

    elementWithFocus.onfocus = function () {
        elementAnimated.classList.add("animationTranslateLeft");
    }

    elementWithFocus.onblur = function () {
        if (elementWithFocus.value) {
            return
        }
        elementAnimated.classList.remove('animationTranslateLeft');
    };
};

interface IUser {
    firstName: string,
    lastName: string,
    birthDate: Date,
    country: string,
    city: string,
    email: string,
    password: string
}

function validateLocalStorage() {
    const userRegistred: string | null = localStorage.getItem("user")

    if (userRegistred) {
        const recoveryUserRegistred: IUser = JSON.parse(userRegistred)
        console.log(localStorage.getItem("firstName"))
        console.log(recoveryUserRegistred.firstName)
        console.log(recoveryUserRegistred.lastName)
        console.log(recoveryUserRegistred.email)
        console.log(recoveryUserRegistred.password)
        login(recoveryUserRegistred)
    }

}

function login(recoveryUserRegistred: IUser) {
    const functionArray = [validateInputForm(usernameInput, usernameInputError), validateInputForm(userPasswordInput, passwordInputError)]
    if (functionArray.every((res) => res)) {
        if (recoveryUserRegistred.firstName.concat(recoveryUserRegistred.lastName) === usernameInput.value || recoveryUserRegistred.email === usernameInput.value) {
            if (recoveryUserRegistred.password === userPasswordInput.value) {
                messageErrorFormulary1.classList.remove("message-error-formulary-visible")
                messageErrorFormulary2.classList.remove("message-error-formulary-visible")
                window.location.href = "/src/home/index.html"
            }
            if((usernameInput.value === "") && (userPasswordInput.value === "")){
                messageErrorFormulary1.classList.remove("message-error-formulary-visible")
                messageErrorFormulary2.classList.remove("message-error-formulary-visible")
                
            }
            
            else {
                messageErrorFormulary1.classList.add("message-error-formulary-visible")
                messageErrorFormulary2.classList.remove("message-error-formulary-visible")
                usernameInput.classList.add("input-error")
                userPasswordInput.classList.add("input-error")
            }
        }
        else {
            messageErrorFormulary1.classList.add("message-error-formulary-visible")
            messageErrorFormulary2.classList.add("message-error-formulary-visible")
            usernameInput.classList.add("input-error")
            userPasswordInput.classList.add("input-error")
        }
        messageErrorFormulary1.classList.remove("message-error-formulary-visible")
        messageErrorFormulary2.classList.remove("message-error-formulary-visible")
        usernameInput.classList.remove("input-error")
        userPasswordInput.classList.remove("input-error")


    }
}
