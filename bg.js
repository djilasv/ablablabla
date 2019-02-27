let css = document.getElementById("kodpozadine");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let body =document.getElementById("body");




function setGradient(){
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value +")";
    css.textContent =  body.style.background;
}


color1.addEventListener('input', setGradient);
   

color2.addEventListener('input', setGradient);

 
  