
// Function for dice
function Swap(){
// Generating Random Number
let randomNumber = Math.ceil(Math.random()*6);

// Get Img Tag
let images = document.getElementById('image');

// Get random dice Through Random Number
switch(true){
    case randomNumber == 1:
    images.src="./images/1.png";
    break;
    case randomNumber == 2:
    images.src="./images/2.png";
    break;
    case randomNumber == 3:
    images.src="./images/3.png";
    break;
    case randomNumber == 4:
    images.src="./images/4.png";
    break;
    case randomNumber == 5:
    images.src="./images/5.png";
    break;
    case randomNumber == 6:
    images.src="./images/6.png";
    break;
    
}

}
