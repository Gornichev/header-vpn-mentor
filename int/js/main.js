// burgermenu

const btnMenu = document.querySelector("#btn-show-menu");
const hideMenu = document.querySelector("#btn-hide-menu");
const body = document.querySelector("body");
const menu = document.querySelector("#menu");

btnMenu.onclick = function() {
    btnMenu.classList.add("hide");
    menu.classList.add("show");
}

hideMenu.onclick = function() {
    btnMenu.classList.remove("hide");
    menu.classList.remove("show");
}


function dropdownFunction() {
    document.getElementById("dropdown-btn-language").classList.toggle("show")
    document.getElementById("icon").classList.toggle("rotate");
}

window.onclick = function(event) {
    if (!event.target.matches('.drop-btn')) {

        const dropdowns = document.getElementsByClassName("dropdown-content-language");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function dropdownBurgerFunction() {
    document.getElementById("dropdown-burger-language").classList.toggle("shows")
    document.getElementById("icon-burger").classList.toggle("rotate");
}

window.onclick = function(event) {
    if (!event.target.matches('.drop-burger')) {

        const dropdowns = document.getElementsByClassName("dropdown-burger-language");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('shows')) {
                openDropdown.classList.remove('shows');
            }
        }
    }
}

// accordion
