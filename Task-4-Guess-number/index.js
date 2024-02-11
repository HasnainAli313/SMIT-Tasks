let randomNumber = Math.random();
randomNumber = Math.ceil(randomNumber*6);
console.log( randomNumber );

let win = false;
for(let i = 0; i < 3;i++)
{
let guess = +prompt("Guess an random number from 1 - 3")
   if(guess == randomNumber){
    win = true;
    break;
   }
}
if(win){
    console.log("You won the round!");
}
else{
    console.log("You failed in round");
}