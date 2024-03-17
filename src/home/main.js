var buttonLogout = document.querySelector(".button-logout");
//remember fix there down logic
// add link uol in icons to home page
// add counter
// trying add hours-o-clock
//trying add weather api
// and if plenty of time don't forget implement login validation in home page, for example if user is loged don't show login page again, show only user click in logout
buttonLogout.onclick = function () {
    localStorage.clear();
    window.location.href = "/";
};
