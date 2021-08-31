function clock(){
let date = new Date;
let time = document.getElementById("time").innerHTML = date.getHours() + ":" + date.getMinutes();
let date_p = document.getElementById("date").innerHTML = date.getFullYear() + "-" + parseInt(date.getMonth()+1) + "-" + date.getDay();
};
setInterval(clock,100);

var input = document.getElementById("input");

input.addEventListener("change",color);

function color(){
    localStorage.setItem("getcolor",input.value);
    var main = document.getElementById("main").style.backgroundColor = localStorage.getItem("getcolor");
    var body = document.getElementById("body").style.backgroundColor = localStorage.getItem("getcolor");
};

function get(){
    input.value = localStorage.getItem("getcolor");
    var main = document.getElementById("main").style.backgroundColor = localStorage.getItem("getcolor");
    var body = document.getElementById("body").style.backgroundColor = localStorage.getItem("getcolor");
}
onload = get();