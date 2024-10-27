var a = Math.floor(Math.random()*6) + 1;
var b = Math.floor(Math.random()*6) + 1;
var image1= "images/dice"+a+".png";
var image2= "images/dice"+b+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);
document.querySelectorAll("img")[1].setAttribute("src",image2);
if (a>b){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if (b>a){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="draws";
}