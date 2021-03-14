function showTime(){

    var date = new Date();
    var uur = date.getHours();
    var minuut = date.getMinutes();
    var sec = date.getSeconds();
    var dag = date.getDate();
    var maand = date.getMonth() + 1;
    var jaar = date.getFullYear();
    
    if (uur < 10){
        uur = "0" + uur;
    }

    if (minuut < 10){
        minuut = "0" + minuut;
    }
    
    if (sec < 10){
        sec = "0" + sec;
    }
    
    var time = uur + ":" + minuut + ":" + sec;
    var datum = dag + "-" + maand + "-" + jaar;
    
    document.getElementById("klok").innerHTML = time;
    
    document.getElementById("datum").innerHTML = datum;
    
    setTimeout(showTime, 1000);
    
}

function change(){
    var date = new Date();
    var uur = date.getHours();

    if (uur >= 0 && uur <= 6) {
       if (window.screen.width >= 1024) {
            document.body.style.backgroundImage = "url('Img/Nacht.jpg') ";
        }
        else if (window.screen.width <= 1024 && window.screen.width >= 376 && window.screen.height >= 453) { 
            document.body.style.backgroundImage = "url('Img/Nacht-tablet.jpg') ";
        }
        else if (window.screen.width <= 812 && window.screen.width >= 376 && window.screen.height <= 453) {
            document.body.style.backgroundImage = "url('Img/Nacht-liggend.jpg') ";
        }
        else if (window.screen.width <= 375) {
            document.body.style.backgroundImage = "url('Img/Nacht-telefoon.jpg') ";
        }
       }

    if (uur >= 7 && uur < 12) {
        if (window.screen.width >= 1024) {
            document.body.style.backgroundImage = "url('Img/Ochtend.jpg') ";
        }
        else if (window.screen.width <= 1024 && window.screen.width > 376 && window.screen.height >= 453) { 
            document.body.style.backgroundImage = "url('Img/Ochtend-tablet.jpg') ";
        }
        else if (window.screen.width <= 812 && window.screen.width >= 376 && window.screen.height <= 453) {
            document.body.style.backgroundImage = "url('Img/Ochtend-liggend.jpg') ";
        }
        else if (window.screen.width <= 375) {
            document.body.style.backgroundImage = "url('Img/Ochtend-telefoon.jpg') ";
        }
    }

    if (uur >= 12 && uur < 18) {
        if (window.screen.width >= 1024) {
            document.body.style.backgroundImage = "url('Img/Middag.jpg') ";
        }
        else if (window.screen.width <= 1024 && window.screen.width >= 376 && window.screen.height >= 453) { 
            document.body.style.backgroundImage = "url('Img/Middag-tablet.jpg') ";
        }
        else if (window.screen.width <= 812 && window.screen.width >= 376 && window.screen.height <= 453) {
            document.body.style.backgroundImage = "url('Img/Middag-liggend.jpg') ";
        }
        else if (window.screen.width <= 375) {
            document.body.style.backgroundImage = "url('Img/Middag-telefoon.jpg') ";
        }
    }

    if (uur >= 18 && uur <= 23) {
        if (window.screen.width >= 1024) {
            document.body.style.backgroundImage = "url('Img/Avond.jpg') ";
        }
        else if (window.screen.width <= 1024 && window.screen.width >= 376 && window.screen.height >= 453) { 
            document.body.style.backgroundImage = "url('Img/Avond-tablet.jpg') ";
        }
        else if (window.screen.width <= 812 && window.screen.width >= 376 && window.screen.height <= 453) {
            document.body.style.backgroundImage = "url('Img/Avond-liggend.jpg') ";
        }
        else if (window.screen.width <= 375) {
            document.body.style.backgroundImage = "url('Img/Avond-telefoon.jpg') ";
        }
    }
}

showTime();