let mytime=setInterval(function(){myTimer()},1000);

function myTimer() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
}

let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
button1.onclick=function(){
    document.body.style.filter ="drop-shadow(0px 0px 60px #fff)";
   }
button2.onclick=function(){
    document.body.style.filter ="none";
}