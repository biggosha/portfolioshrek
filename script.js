var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tabcontents");
var sidemenu = document.getElementById("sidemenu");
var btn = document.getElementsByClassName("btn3");
var slide = document.getElementById("slide");
const emailInput=document.getElementById("email");
const submitButton = document.getElementById("submitButton");
const nameInput = document.getElementById("name");
const msgs = document.getElementById("msg");


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
        }
        else {
            submitButton.style.left = "0%";
            msgs.style.color = "red"
            msgs.innerHTML = "Please enter a valid E-mail!"
            submitButton.style.background = "red";
            submitButton.style.borderColor = "red";
        }
    }
    else {
        submitButton.style.background = "aqua";
        msgs.innerHTML = "";
        submitButton.style.borderColor = "aqua";
    }
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