/*var trainSpeed = 250;
var trainPosition = 0;
var animation;

var train = document.getElementById("train");
train.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
  if (trainSpeed > 10) {
    trainSpeed -= 10;
  }
  console.log("train speed: " + trainSpeed);

  clearInterval(animation);
  animation = setInterval(frame, trainSpeed);

  function frame() {
    trainPosition += 2;
    train.style.left = trainPosition + "px";
    console.log(trainPosition);
    checkPosition(trainPosition);
  }
}

function checkPosition(currentPosition) {
  if (currentPosition === 260) {
    alert("OOOOO!");
    console.log("Crash!");
    clearInterval(animation);
  }
}

function stopTrain() {
  if (trainPosition < 260) {
    clearInterval(animation);
  }
} */

function setTrainSpeedIfSafe(speed) {
  if (trainPosition < 260) {
    trainSpeed = speed;
    console.log("Train speed safely set to: " + trainSpeed);
  } else {
    console.log("Too late! Train already crashed or passed the danger zone.");
  }
}
