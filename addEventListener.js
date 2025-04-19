document.getElementById("img1").onmouseover= jkl;
function jkl(){
    document.getElementById("img1").style.filter = "grayscale(0%)";
}
document.getElementById("img1").onmouseout  = pqr;
function pqr(){
    document.getElementById("img1").style.filter = "grayscale(100%)";
}


document.getElementById("img2").onmouseout= abc;
function abc(){
    document.getElementById("img2").style.filter = "grayscale(0%)";
}
document.getElementById("img2").onmouseover  = xyz;
function xyz(){
    document.getElementById("img2").style.filter = "grayscale(100%)";
}
document.getElementById("img1").addEventListener("mouseover",abc);
function abc(){
    document.getElementById("img1").style.filter = "grayscale(0%)";
}
document.getElementById("img1").addEventListener("mouseout", xyz);
function xyz(){
    document.getElementById("img1").style.filter = "grayscale(100%)";
}

document.getElementById("img2").addEventListener("mouseout",pqr);
function pqr(){
    document.getElementById("img2").style.filter = "grayscale(0%)";
}
document.getElementById("img2").addEventListener("mouseover", jkl);
function jkl(){
    document.getElementById("img2").style.filter = "grayscale(100%)";
}
document.getElementById("img1").addEventListener("mouseout",function(){
    document.getElementById("img1").style.filter = "grayscale(0%)";
});
document.getElementById("img1").addEventListener("mouseover", function(){
    document.getElementById("img1").style.filter = "grayscale(100%)";
});

document.getElementById("img2").addEventListener("mouseover",function(){
    document.getElementById("img2").style.filter = "grayscale(0%)";
});
document.getElementById("img2").addEventListener("mouseout", function(){
    document.getElementById("img2").style.filter = "grayscale(100%)";
});