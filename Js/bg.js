function change(){
    var date = new Date();
    var uur = date.getHours();
    if (uur > 0 && uur < 6) {
       if (window.screen.width >= 1024) {
            document.body.style.backgroundImage = "url('Img/Ochtend.jpg') ";
        }
        else if (window.screen.width < 1024 && window.screen.width > 376) { 
            document.body.style.background = "white";
        }
        else if () {
            document.body.style.background = "white";
        }
        else if (window.screen.width < 375) {
            document.body.style.background = "white";
        }
       }

    if (uur > 7 && uur < 12) {
        if (window.screen.width >= 1024) {
            document.body.style.backgroundImage = "url('Img/Middag.jpg') ";
        }
        else if (window.screen.width < 1024 && window.screen.width > 376) { 
            document.body.style.backgroundImage = "url('Img/Middag.jpg') ";
        }
        else if () {
            document.body.style.backgroundImage = "url('Img/Middag.jpg') ";
        }
        else if (window.screen.width < 375) {
            document.body.style.backgroundImage = "url('Img/Middag.jpg') ";
        }
    }

    if (uur > 11 && uur < 18) {
        if (window.screen.width >= 1024) {
            document.body.style.backgroundImage = "url('Img/Avond.jpg') ";
        }
        else if (window.screen.width < 1024 && window.screen.width > 376) { 
            document.body.style.backgroundImage = "url('Img/Middag.jpg') ";
        }
        else if () {
            document.body.style.backgroundImage = "url('Img/Middag.jpg') ";
        }
        else if (window.screen.width < 375) {
            document.body.style.backgroundImage = "url('Img/Middag.jpg') ";
        }
    }

    if (uur > 17 && uur < 0) {
        if (window.screen.width >= 1024) {
            document.body.style.backgroundImage = "url('Img/Nacht.jpg') ";
        }
        else if (window.screen.width < 1024 && window.screen.width > 376) { 
            document.body.style.backgroundImage = "url('Img/Middag.jpg') ";
        }
        else if () {
            document.body.style.backgroundImage = "url('Img/Middag.jpg') ";
        }
        else if (window.screen.width < 375) {
            document.body.style.backgroundImage = "url('Img/Middag.jpg') ";
        }
    }
}