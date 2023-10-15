function Aval(){

var x=Math.random();
var y=(x*6)+1;
var randomNumber1=Math.floor(y);
return randomNumber1;
}


var A=Aval();
var B=Aval();

var img1 = "./images/dice"+ A +".png";
var img2 = "./images/dice"+ B +".png";

document.querySelector(".img1").setAttribute("src",img1);
document.querySelector(".img2").setAttribute("src",img2);


if (A>B){
document.querySelector("h1").innerHTML="Player A is Winner";
}
else if (A<B){
document.querySelector("h1").innerHTML="Player B is Winner";
}
else{
document.querySelector("h1").innerHTML="Draw";
}