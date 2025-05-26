const Btns = document.getElementsByTagName("button");
const body = document.getElementsByTagName("body");
const contacts = document.querySelector('#contactDiv');
const mainHeading = document.querySelector("#textCon h1");
const emailIcon = document.querySelector("#EmailPara i");
const nav_a = document.querySelectorAll("nav a");
const menuPage = document.getElementById("menuSec");
const aboutPage = document.getElementById("aboutSec");
const contactPage = document.getElementById("contactSec");
const emailSubmitBtn = document.getElementById("contactBtn");
const user1stName = document.getElementById("first_name");
const user2ndName = document.getElementById("sec_name");
const userEmail = document.getElementById("textarea");
const modeBtn = Btns[0];
const contactBtn = Btns[1];
// Dark Mode;
let mode = "light";
let modeIcon = modeBtn.innerHTML;
modeBtn.addEventListener("click", () => {
    if (mode === "light") {
        body[0].classList.add("bodyJs");
        modeBtn.innerHTML = "☀";
        modeBtn.style.color = "orange";
        mainHeading.style.color = "yellow";
        emailIcon.style.color = " #008eff";
        mode = "dark";
    } else {
        mainHeading.style.color = "rgb(192, 192, 0)";
        emailIcon.style.color = "skyblue";
        body[0].classList.remove("bodyJs");
        mode = "light";
        modeBtn.innerHTML = modeIcon;
    }
});
// EventListener on contact Btn
let displayed = false;
contactBtn.addEventListener("click", () => {
    if (displayed === false) {
        contacts.style.display = "flex";
        displayed = true;
    } else {
        contacts.style.display = "none";
        displayed = false;
    }
});
// Setting Navbar Tags background when going from one page to other;
nav_a[0].addEventListener("click", () => {
    nav_a[0].classList.add("nav_aJs");
    nav_a[1].classList.remove("nav_aJs");
    nav_a[2].classList.remove("nav_aJs");
    menuPage.style.display = "grid";
    aboutPage.style.display = "none";
    contactPage.style.display = "none";
});
nav_a[1].addEventListener("click", () => {
    nav_a[0].classList.remove("nav_aJs");
    nav_a[1].classList.add("nav_aJs");
    nav_a[2].classList.remove("nav_aJs");
    aboutPage.style.display = "grid";
    menuPage.style.display = "none";
    contactPage.style.display = "none";
});
nav_a[2].addEventListener("click", () => {
    nav_a[0].classList.remove("nav_aJs");
    nav_a[1].classList.remove("nav_aJs");
    nav_a[2].classList.add("nav_aJs");
    contactPage.style.display = "inline";
    aboutPage.style.display = "none";
    menuPage.style.display = "none";
});
// menu (AA) background;
window.onload = nav_a[0].classList.add("nav_aJs");
// Eventlistener for "Contact 🤝" btn;
emailSubmitBtn.addEventListener("click", () => {
    if (user1stName.value === "" && user2ndName.value === "" && userEmail.value === "") {
        alert("please fill the form first;");        
    } else {
        alert("Your email is Submitted");     
    };
    user1stName.value = "";
    user2ndName.value = "";
    userEmail.value = "";
});