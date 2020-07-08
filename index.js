// For changing the image of first die
var randomNumber1 = Math.floor(Math.random()*6)+1;
var srcUpdate1 = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",srcUpdate1);

// For changing the image of second dice
var randomNumber2  = Math.floor(Math.random()*6)+1;
var srcUpdate2 = "images/dice" +randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",srcUpdate2);

//For changing the image of third dice
var randomNumber3 = Math.floor(Math.random()*6)+1;
var srcUpdate3 = "images/dice" +randomNumber3 +".png";
document.querySelectorAll("img")[2].setAttribute("src",srcUpdate3);


// DECIDING who won or is that a draw case
if( (randomNumber1>randomNumber2) && (randomNumber1>randomNumber3) ){
  document.querySelector("h1").innerHTML= "🦾Dipu The Boss";
}
else if ( (randomNumber2>randomNumber1) && (randomNumber2>randomNumber3) ) {
  document.querySelector("h1").innerHTML= "Aman🦾 The Boss";
}
else if ( (randomNumber3>randomNumber1) && (randomNumber3>randomNumber2) ) {
  document.querySelector("h1").innerHTML="Arsana The Boss🦾"
}
else if(randomNumber1==randomNumber2){
  document.querySelector("h1").innerHTML= "Dipu and Aman will do the whole coding, Arsana RELAX🎉";
}
else if(randomNumber1==randomNumber3){
  document.querySelector("h1").innerHTML= "Dipu and Arsana will do the whole coding, Aman RELAX🎉";
}
else if(randomNumber2==randomNumber3){
  document.querySelector("h1").innerHTML= "Arsana and Aman will do the whole coding, Dipu RELAX🎉";
}
else{
  document.querySelector('h1').innerHTML = "Draw!";
}
