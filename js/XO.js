var v1, v2, v3, v4, v5, v6, v7, v8, v9;

v1 = document.getElementById("v1").innerHTML;
v2 = document.getElementById("v2").innerHTML;
v3 = document.getElementById("v3").innerHTML;
v4 = document.getElementById("v4").innerHTML;
v5 = document.getElementById("v5").innerHTML;
v6 = document.getElementById("v6").innerHTML;
v7 = document.getElementById("v7").innerHTML;
v8 = document.getElementById("v8").innerHTML;
v9 = document.getElementById("v9").innerHTML;

function highlight(element) {
    if (element.value == null) {
        var flag = "X";
        element.value = flag;
    }

    if (flag == "X") {
        flag == "O";
    }

    else if (flag == "O") {
        flag = "X";
    }
    element.style.color = "white";
}