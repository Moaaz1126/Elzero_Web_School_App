/*
    --Start up
    [1] SetDLan
    [2] ThemeD
    [3] AppUpdate

*/
let iframe = document.querySelector("iframe");
let localStorage = window.localStorage;
let rot = document.querySelector(':root');
function menu() {
    let menuDev = document.querySelector(".menu");
    if(menuDev.style.display == "none") {
        menuDev.style.display = "block"
    } else {
        menuDev.style.display = "none"
    }
}
function home() {
    iframe.src = "https://elzero.org/"
}
function menuChan(ele) {
    let menuChanEle = document.querySelectorAll(".menuChanEle");
    for(let x = 0; x < 6; x++) {
        menuChanEle[x].classList.remove("active");
    }
    console.log(ele)
    menuChanEle[ele].classList.add("active");
    if(ele == 0) {
        iframe.src = "https://elzero.org/category/courses/"
        console.log(`if num ${ele}`)
    }
    if(ele == 1) {
        iframe.src = "https://elzero.org/category/assignments/"
        console.log(`if num ${ele}`)
    }
    if(ele == 2) {
        iframe.src = "https://elzero.org/category/tutorials/"
        console.log(`if num ${ele}`)
    }
    if(ele == 3) {
        iframe.src = "https://elzero.org/category/topics/"
        console.log(`if num ${ele}`)
    }
    if(ele == 4) {
        iframe.src = "https://elzero.org/category/challenges/"
        console.log(`if num ${ele}`)
    }
    if(ele == 5) {
        iframe.src = "https://elzero.org/category/developers-tools/"
        console.log(`if num ${ele}`)
    }
}
function chanAppLan(lang) {
    let p = document.querySelectorAll(".name")
    if(lang == "EN") {
        p[0].textContent = "courses"
        p[1].textContent = "Challenges"
        p[2].textContent = "Examples and explanations"
        p[3].textContent = "article"
        p[4].textContent = "Programming Challenges"
        p[5].textContent = "Developer Tools"
        for(let x = 0; x < 6; x++) {
            p[x].style.fontFamily = "Font Awesome 6 Free"
        }
    } else {
        p[0].textContent = "الدورات التعليمية"
        p[1].textContent = "تكاليف الدورات"
        p[2].textContent = "الامثلة والشروحات"
        p[3].textContent = "المقالات"
        p[4].textContent = "التحديات البرمجية"
        p[5].textContent = "ادوات المطورين"
        for(let x = 0; x < 6; x++) {
            p[x].style.fontFamily = "'Noto Kufi Arabic', sans-serif"
            p[x].style.letterSpacing = "0px"
        }
    }
}
function SetDLan() {
    if(localStorage.getItem("lang") == "null" || localStorage.getItem("lang") === null) {
        localStorage.setItem("lang", "EN");
        chanAppLan("EN")
    }
    if(localStorage.getItem("lang") == "AR") {
        document.querySelector("select").value = "AR";
        chanAppLan("AR")
    } else {
        chanAppLan("EN")
    }
}
function SetLan() {
    if(document.querySelector("select").value == "AR") {
        localStorage.setItem("lang", "AR");
        chanAppLan("AR")
    } else {
        localStorage.setItem("lang", "EN");
        chanAppLan("EN")
    }
}

function ThemeD() {
    if(localStorage.getItem("Theme") == "null" || localStorage.getItem("Theme") === null) {
        localStorage.setItem("Theme", "dark");
        rot.style.setProperty('--text', 'white');
        rot.style.setProperty("--background", "black")
        document.querySelector("#Dark").checked = true;
    }
    if(localStorage.getItem("Theme") == "light") {
        rot.style.setProperty('--text', 'black');
        rot.style.setProperty("--background", "white")
        document.querySelector("#Light").checked = true;
    } else {
        document.querySelector("#Dark").checked = true;
    }
}
function Theme(name) {
    if(name == "Dark") {
        localStorage.setItem("Theme", "dark");
        rot.style.setProperty('--text', 'white');
        rot.style.setProperty("--background", "black")
    } else {
        localStorage.setItem("Theme", "light");
        rot.style.setProperty('--text', 'black');
        rot.style.setProperty("--background", "white")
    }
}
function youtube() {
    window.open("https://www.youtube.com/c/ElzeroInfo/videos")
}
function signIn() {
    window.open("https://elzero.org/wp-login.php", "_blink","width=400,height=600,left=450,top=250")
}
function pomodoro() {
    let container = document.querySelector(".pomodoro");
    if(container.style.display == "none") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}
function notion() {
    window.open("https://notion.so", "_blink","width=400,height=600,left=450,top=250")
}
function W3Shools() {
    window.open("https://www.w3schools.com/", "_blink","width=400,height=600,left=450,top=250")
}
function stackoverflow() {
    window.open("https://stackoverflow.com/", "_blink","width=400,height=600,left=450,top=250")
}
function mozilla() {
    window.open("https://developer.mozilla.org/", "_blink","width=400,height=600,left=450,top=250")
}
function codepen() {
    window.open("https://codepen.io/", "_blink","width=400,height=600,left=450,top=250")
}
function gitHub() {
    window.open("https://github.com/", "_blink","width=400,height=600,left=450,top=250")
}
function dev() {
    window.open("https://dev.to/", "_blink","width=400,height=600,left=450,top=250")
}



// update 
const verson = "1.3.0"
function AppUpdate() {
    $.getJSON("https://elzerowebschoolapp.web.app/update.json", function(date) {
        if(date[0].verson > verson) {
            document.querySelector("#install").href = `${date[0].file}`
            document.querySelector("header").style.display = "flex"
            document.querySelector("#updateM").textContent = `We have new update, Plese install the new verson ${date[0].verson}`
        }
    })
}
function CloseUpdate() {
    document.querySelector("header").style.display = "none"
}