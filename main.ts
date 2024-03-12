const formularyLogin = document.getElementById(
    "formulary-login"
) as HTMLFormElement;

document.getElementById("input-username")!.onfocus = () => animationSvgOnTranslateLeft("input-username", "icon-svg-user")
document.getElementById("input-password")!.onfocus = () => animationSvgOnTranslateLeft("input-password", "icon-svg-password")


formularyLogin.addEventListener("submit", (event: Event) => {
    event.preventDefault();
});


const loginFormValidation = () => {
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


    validateInputForm(usernameInput, usernameInputError)    
    validateInputForm(userPasswordInput, passwordInputError)

};

interface IValidateInputForm {
    input: HTMLInputElement,
    span?: HTMLSpanElement
}

const validateInputForm = (input:HTMLInputElement, span?: HTMLSpanElement) => {
    if (input.value.trim().length === 0) {
        input.classList.add("input-error");
        if (span) {
            span.innerHTML = 'This field is required';
            span.style.display = 'block';
            span.style.visibility = 'visible';
            span.classList.add("label-error-active")
        }

    } else {
        if(span){
            span.innerHTML = ""
            span.style.display = 'none';
            span.style.visibility = 'hidden';
        }
    }
}

function animationSvgOnTranslateLeft(elementFocus: string, nextElement: string) {
    const elementWithFocus = document.getElementById(elementFocus) as HTMLInputElement
    const elementAnimated = document.getElementById(nextElement) as HTMLElement

    if (!elementWithFocus || !elementAnimated) {
        console.error('Elementos não encontrados');
        return;
    }

    elementWithFocus.onfocus = function (){
        elementAnimated.classList.add("animationTranslateLeft");
    }

    elementWithFocus.onblur = function() {
        if(elementWithFocus.value){
            return
        }
        elementAnimated.classList.remove('animationTranslateLeft');
    };
};