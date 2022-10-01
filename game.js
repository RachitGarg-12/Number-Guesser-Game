let x = Math.floor((Math.random() * 100) + 1);
let a; let num = 0;
do {
  a = prompt("Guess the number between 1 to 100:")
  a = Number.parseInt(a); num++;
  if (a == x) {
    console, log("Your Guess is right.");
    break;
  }
  else if (a < x) {
    console.log("You have guessed a smaller number.");
  }
  else {
    console.log("You have guessed a greater number.");
  }
} while (true)

console.log((100 + 1) - num);
