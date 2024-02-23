var ifDark = false;
const darkModeIcon = document.querySelector('.darkmodeicon');

function darkModeFunc() {
    const body = document.body;
    const lightBackground = document.querySelector('.darkModeContainer');

    if (ifDark){
        ifDark = false;
        body.classList.remove("dark-mode");
        darkModeIcon.src = "/Images/material-symbols-light_dark-mode.svg";
    } else {
        body.classList.add("dark-mode");
        ifDark = true;
        darkModeIcon.src = "/Images/material-symbols_light-mode.svg";
    }
}