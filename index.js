// Set initial scores to 0
let homeScore = 0;
let guestScore = 0;

// Get the elements that display the scores
const homeScoreDisplay = document.getElementById('homeScore');
const guestScoreDisplay = document.getElementById('guestScore');

// Function to update the score
function updateScore(team, points) {
  if (team === 'home') {
    homeScore += points; // Add points to the home score
    homeScoreDisplay.textContent = homeScore; // Update the home score display
  } else if (team === 'guest') {
    guestScore += points; // Add points to the guest score
    guestScoreDisplay.textContent = guestScore; // Update the guest score display
  }
}

// Add event listeners for Home buttons
document.getElementById('homeBtn1').addEventListener('click', function() {
  updateScore('home', 1); // Add 1 point to Home
});

document.getElementById('homeBtn2').addEventListener('click', function() {
  updateScore('home', 2); // Add 2 points to Home
});

document.getElementById('homeBtn3').addEventListener('click', function() {
  updateScore('home', 3); // Add 3 points to Home
});

// Add event listeners for Guest buttons
document.getElementById('guestBtn1').addEventListener('click', function() {
  updateScore('guest', 1); // Add 1 point to Guest
});

document.getElementById('guestBtn2').addEventListener('click', function() {
  updateScore('guest', 2); // Add 2 points to Guest
});

document.getElementById('guestBtn3').addEventListener('click', function() {
  updateScore('guest', 3); // Add 3 points to Guest
});
