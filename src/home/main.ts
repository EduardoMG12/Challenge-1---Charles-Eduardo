const buttonLogout = document.querySelector(".button-logout") as HTMLElement;
const fieldSeconds = document.querySelector(".seconds-number") as HTMLElement
const fieldHoursAClock = document.querySelector(".hours-a-clock") as HTMLElement
const fieldDate = document.querySelector(".hours-a-clock-description") as HTMLElement

//trying add weather api
// and if plenty of time don't forget implement login validation in home page, for example if user is loged don't show login page again, show only user click in logout

const daysWeek = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo"

]
const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
]


buttonLogout!.onclick = () => {
    localStorage.clear();
    window.location.href = "/"
}

function updateaHours() {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    fieldHoursAClock.innerHTML = `${hours} : ${minutes}`
    

    const month = new Date().getMonth()
    const day = new Date().getDate()
    const weekDay = new Date().getDay()
    const year = new Date().getFullYear()
    fieldDate.innerHTML = `${daysWeek[weekDay].toLowerCase()}, ${day} de  ${months[month].toLowerCase()} de ${year}`

}

setInterval(updateaHours, 60 * 1000)

const wait = (time: number) => new Promise(res => setTimeout(res, time))

async function startCounter(starting: number, delay: number = 1000) {
    for (let i = starting; i > 0; i--) {
        fieldSeconds.innerHTML = `${i}`;
        await wait(delay)
    }
    await startCounter(starting, delay)
}

updateaHours()
startCounter(60, 1000)
