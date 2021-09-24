var b1,b2,b3,b4,b5,b6,b7,b8,b9;

window.v1 = document.getElementById("v1").innerHTML;
window.v2 = document.getElementById("v2").innerHTML;
window.v3 = document.getElementById("v3").innerHTML;
window.v4 = document.getElementById("v4").innerHTML;
window.v5 = document.getElementById("v5").innerHTML;
window.v6 = document.getElementById("v6").innerHTML;
window.v7 = document.getElementById("v7").innerHTML;
window.v8 = document.getElementById("v8").innerHTML;
window.v9 = document.getElementById("v9").innerHTML;

b1 = document.getElementById("v1");
b2 = document.getElementById("v2");
b3 = document.getElementById("v3");
b4 = document.getElementById("v4");
b5 = document.getElementById("v5");
b6 = document.getElementById("v6");
b7 = document.getElementById("v7");
b8 = document.getElementById("v8");
b9 = document.getElementById("v9");


window.count = 0;

function display(element) {
    if (count%2 == 0) {
        if      (element == b1) {v1 = "X";}
        else if (element == b2) {v2 = "X";}
        else if (element == b3) {v3 = "X";}
        else if (element == b4) {v4 = "X";}
        else if (element == b5) {v5 = "X";}
        else if (element == b6) {v6 = "X";}
        else if (element == b7) {v7 = "X";}
        else if (element == b8) {v8 = "X";}
        else if (element == b9) {v9 = "X";}
    }

    else if (count%2 != 0) {
        if      (element == b1) {v1 = "O";}
        else if (element == b2) {v2 = "O";}
        else if (element == b3) {v3 = "O";}
        else if (element == b4) {v4 = "O";}
        else if (element == b5) {v5 = "O";}
        else if (element == b6) {v6 = "O";}
        else if (element == b7) {v7 = "O";}
        else if (element == b8) {v8 = "O";}
        else if (element == b9) {v9 = "O";}
    }
    element.style.color = "white";
    element.style.cursor = "not-allowed";
    element.classList.add("noHover");
    count++;
    check();
}

function reveal(element) {
    if (count%2 == 0) {
        element.innerHTML = "X";
    }

    else if (count%2 != 0) {
        element.innerHTML = "O";
    }
}

function check() {
    if ((v1 == "X" && v2 == "X" && v3 == "X") || (v1 == "O" && v2 == "O" && v3 == "O")) {
        b1.classList.add("winner");
        b2.classList.add("winner");
        b3.classList.add("winner");

        if (v1=="X") {window.open("../html/Xwin.html", "_self");}
        else if (v1=="O") {window.open("../html/Owin.html", "_self");}
    }  
    
    else if ((v4 == "X" && v5 == "X" && v6 == "X") || (v4 == "O" && v5 == "O" && v6 == "O")) {
        b4.classList.add("winner");
        b5.classList.add("winner");
        b6.classList.add("winner");

        if (v4=="X") {window.open("../html/Xwin.html", "_self");}
        else if (v4=="O") {window.open("../html/Owin.html", "_self");}
    }
    
    else if ((v7 == "X" && v8 == "X" && v9 == "X") || (v7 == "O" && v8 == "O" && v9 == "O")) {
        b7.classList.add("winner");
        b8.classList.add("winner");
        b9.classList.add("winner");

        if (v7=="X") {window.open("../html/Xwin.html", "_self");}
        else if (v7=="O") {window.open("../html/Owin.html", "_self");}
    }

    else if ((v1 == "X" && v4 == "X" && v7 == "X") || (v1 == "O" && v4 == "O" && v7 == "O")) {
        b1.classList.add("winner");
        b4.classList.add("winner");
        b7.classList.add("winner");

        if (v1=="X") {window.open("../html/Xwin.html", "_self");}
        else if (v1=="O") {window.open("../html/Owin.html", "_self");}
    }
    
    else if ((v2 == "X" && v5 == "X" && v8 == "X") || (v2 == "O" && v5 == "O" && v8 == "O")) {
        b2.classList.add("winner");
        b5.classList.add("winner");
        b8.classList.add("winner");

        if (v2=="X") {window.open("../html/Xwin.html", "_self");}
        else if (v2=="O") {window.open("../html/Owin.html", "_self");}
    }

    else if ((v3 == "X" && v6 == "X" && v9 == "X") || (v3 == "O" && v6 == "O" && v9 == "O")) {
        b3.classList.add("winner");
        b6.classList.add("winner");
        b9.classList.add("winner");

        if (v3=="X") {window.open("../html/Xwin.html", "_self");}
        else if (v3=="O") {window.open("../html/Owin.html", "_self");}
    }

    else if ((v1 == "X" && v5 == "X" && v9 == "X") || (v1 == "O" && v5 == "O" && v9 == "O")) {
        b1.classList.add("winner");
        b5.classList.add("winner");
        b9.classList.add("winner");

        if (v1=="X") {window.open("../html/Xwin.html", "_self");}
        else if (v1=="O") {window.open("../html/Owin.html", "_self");}
    }

    else if ((v3 == "X" && v5 == "X" && v7 == "X") || (v3 == "O" && v5 == "O" && v7 == "O")) {
        b3.classList.add("winner");
        b5.classList.add("winner");
        b7.classList.add("winner");

        if (v3=="X") {window.open("../html/Xwin.html", "_self");}
        else if (v3=="O") {window.open("../html/Owin.html", "_self");}
    } 
    
    else if (count == 9) {
        window.open("../html/draw.html", "_self");
    }
}
