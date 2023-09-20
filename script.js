var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tabcontents");
var sidemenu = document.getElementById("sidemenu");
var btn = document.getElementsByClassName("btn3");
var slide = document.getElementById("slide");
const emailInput=document.getElementById("email");
const submitButton = document.getElementById("submitButton");
const nameInput = document.getElementById("name");
const msgs = document.getElementById("msg");
const themeToAqua = document.getElementById("Aqua");
const themeToMagenta = document.getElementById("Magenta");
const themeToOrange = document.getElementById("Orange");
const themeToGreen = document.getElementById("Green");
var r = document.querySelector(':root');
var logoImage = document.getElementById("homelogo");


submitButton.addEventListener("mouseover", (button)=> {
    let email = emailInput.value;
    let validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if(!validate) {
        if(submitButton.style.left == "0%"){
            submitButton.style.left = "80%";
            submitButton.style.background = "red";
            submitButton.style.borderColor = "red";
            msgs.style.color = "red"
            msgs.innerHTML = "Please enter a valid E-mail!"
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
        }
        else {
            submitButton.style.left = "0%";
            msgs.style.color = "red"
            msgs.innerHTML = "Please enter a valid E-mail!"
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
            submitButton.style.background = "red";
            submitButton.style.borderColor = "red";
        }
    }
    else {
        submitButton.style.background = "var(--theme-color)";
        msgs.innerHTML = "";
        submitButton.style.borderColor = "var(--theme-subcolor)";
    }
})

themeToAqua.addEventListener("click",()=> {
    logoImage.src = "logo.png";
    r.style.setProperty('--theme-color', 'aqua');
    r.style.setProperty('--theme-subcolor','#47aeb5')
})
themeToMagenta.addEventListener("click",()=> {
    logoImage.src = "logo_magenta.png";
    r.style.setProperty('--theme-color', 'magenta');
    r.style.setProperty('--theme-subcolor','#6f0792')
})
themeToOrange.addEventListener("click",()=> {
    logoImage.src = "logo_orange.png";
    r.style.setProperty('--theme-color', 'orange');
    r.style.setProperty('--theme-subcolor','#794603')
})
themeToGreen.addEventListener("click",()=> {
    logoImage.src = "logo_green.png";
    r.style.setProperty('--theme-color', '#02cf02');
    r.style.setProperty('--theme-subcolor','#178102')
})


btn[0].onclick = function() {
    slide.style.transform = "translateX(0px)";
    for(i=0;i<4;i++){
        btn[i].classList.remove("activebtn");
    }
    this.classList.add("activebtn");
}
btn[1].onclick = function() {
    slide.style.transform = "translateX(-800px)";
    for(i=0;i<4;i++){
        btn[i].classList.remove("activebtn");
    }
    this.classList.add("activebtn");
}
btn[2].onclick = function() {
    slide.style.transform = "translateX(-1600px)";
    for(i=0;i<4;i++){
        btn[i].classList.remove("activebtn");
    }
    this.classList.add("activebtn");
}
btn[3].onclick = function() {
    slide.style.transform = "translateX(-2400px)";
    for(i=0;i<4;i++){
        btn[i].classList.remove("activebtn");
    }
    this.classList.add("activebtn");
}

function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("activelink")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("activetab")
    }
    event.currentTarget.classList.add("activelink");
    document.getElementById(tabname).classList.add("activetab")
}

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}