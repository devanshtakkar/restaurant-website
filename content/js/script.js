"use strict"

let mobileNav = document.getElementById("nav-modal");
let openBtn = document.getElementById("modal-open-btn");
let closeBtn = document.getElementById("close-menu-button");

openBtn.addEventListener("click", toggleMobileNav);

function toggleMobileNav(event){
    mobileNav.classList.toggle("nav-modal-display");
}

closeBtn.addEventListener("click", toggleMobileNav);