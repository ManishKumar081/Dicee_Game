var randomNumber1=Math.floor((Math.random() * 6)) + 1;
var image="dice"+randomNumber1+".png";
var imageSource="./images/"+image;
document.querySelector(".img1").setAttribute("src",imageSource);

var randomNumber2=Math.floor((Math.random() * 6)) + 1;
var image="dice"+randomNumber2+".png";
var imageSource="./images/"+image;
document.querySelector(".img2").setAttribute("src",imageSource);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Won!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Won!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}