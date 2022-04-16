const button = document.querySelector(".menu-burger");
const menu = document.querySelector(".header-menu");
const social = document.querySelector(".social-header");
let coments = [];
const buttonComents = document.getElementById("coments-button");
loadComents();


button.addEventListener("click", () =>{
    button.classList.toggle("open-menu")
    menu.classList.toggle("open")
    social.classList.toggle("opens")
})

buttonComents.onclick = function(){
    event.preventDefault();
    const comentsName = document.getElementById("coments-name");
    const comentsText = document.getElementById("coments-text");

    const coment = {
        name: comentsName.value,
        text: comentsText.value,
        time: Math.floor(Date.now()/1000)
    }
    coments.push(coment)
    comentsName.value = "";
    comentsText.value = "";
    saveComents();
    showComents()
}

function saveComents(){
    localStorage.setItem("coments", JSON.stringify(coments));
}
function loadComents(){
    if (localStorage.getItem("coments")) coments = JSON.parse(localStorage.getItem("coments"))
    showComents();
}
function showComents(item){
    let field = document.getElementById("coments-field");
    let out = '';
    coments.forEach(function(item){
        out += `<em><p class="time">${timeConvertor(item.time)}</p></em>`
        out += `<p class="name">${item.name}</p>`
        out += `<p class="text">${item.text}</p>`
    }); 
    field.innerHTML = out;
}

function timeConvertor(times){
    let a = new Date(times * 1000);
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min ;
    return time;
}

