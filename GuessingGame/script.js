/* var secret = 7;

let answer = prompt (“Please guess the secret number (1-20)”);

var guess = parseInt (answer);

if (guess === secret) {
  alert("Correct Guess!");
} else {
  alert("Sorry, incorrect Guess!");
}
*/

/* let secret = 7; // This is the number the player has to guess

let guess = parseInt(prompt("Guess the secret number (1–20):"));


while (guess !== secret) {
  

  if (guess < secret) {
    alert("Incorrect, too low!");
  } else if (guess > secret) {
    alert("Incorrect, too high!");
  }

  guess = parseInt(prompt("Try again:"));
}


alert("Correct Guess!"); */

let secret = Math.floor(Math.random() * 20) + 1;

let guess = parseInt(prompt("Guess the secret number (1–20):"));

while (guess != secret) {
  if (guess < secret) {
    alert("Incorrect, too low!");
  } else if (guess > secret) {
    alert("Incorrect, too high!");
  }

  guess = parseInt(prompt("Try again:"));
}

alert("Correct Guess!");
