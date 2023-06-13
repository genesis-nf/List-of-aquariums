var text = document.getElementsByClassName("carousel-text");
var str = text.innerHTML;

text.innerHTML = "";

var speed = 200;
var i = 0;


function typeWriter() {
    if(i < str.length) {
        text.innerHTML += str.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
};

setTimeout(typeWriter, speed);