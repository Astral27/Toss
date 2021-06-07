function ludo(){
var random=Math.floor(Math.random() * 6) + 1;//0-6 counting
var image_random="images/dice" + random + ".png";//random images//

var image1=document.querySelectorAll("img")[0];//call query
image1.setAttribute("src",image_random);//setting random image

var random_num=Math.floor(Math.random() * 6)+1;
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+random_num+".png");

if(random===random_num){
  document.querySelector("h1").innerHTML="DRAW!";
}
else if(random>random_num)
{
  document.querySelector("h1").innerHTML="🎉Player 1 Wins!";
}
else
{
  document.querySelector("h1").innerHTML="Player 2 Wins!🎊";
}
}
