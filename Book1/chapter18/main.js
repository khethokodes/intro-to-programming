// GLOBAL VARIABLES
let weeklyBudget = getWeeklyBudget(); // money earned for the week
let totalLunchesBought = 0;
let totalSpent = 0;
let pricesThisWeek = [];

// Show initial budget
document.getElementById("money").textContent = weeklyBudget.toFixed(2);

// Listen for "Place Order" button
document.getElementById("placeOrder").addEventListener("click", buyLunches);

/**
 * Simulate weekly lunch purchases
 */
function buyLunches() {
  resetGame(); // Clear previous game state

  const sandwichesPerDay = parseInt(document.getElementById("numSandwiches").value);

  // ✅ Validate input
  if (isNaN(sandwichesPerDay) || sandwichesPerDay <= 0) {
    alert("Please enter a valid number of sandwiches per day.");
    return;
  }

  let currentDay = 1;

  // Loop through each school day (7 max)
  while (weeklyBudget > 0 && currentDay <= 7) {
    const todayPrice = getSandwichPrice();
    const costToday = sandwichesPerDay * todayPrice;

    // Store price to compute average later
    pricesThisWeek.push(todayPrice);

    // If there's enough money, buy sandwiches
    if (weeklyBudget >= costToday) {
      weeklyBudget -= costToday;
      totalLunchesBought++;
      totalSpent += costToday;

      logMessage(
        `Day ${currentDay}: Sandwiches cost $${todayPrice}. You spent $${costToday.toFixed(
          2
        )}. $${weeklyBudget.toFixed(2)} left.`
      );
    } else {
      logMessage(
        `Day ${currentDay}: Sandwiches cost $${todayPrice}, but you can't afford them. You go hungry today.`
      );
      break;
    }

    currentDay++;
  }

  // ✅ Final Summary
  logMessage(`<strong>You bought lunch ${totalLunchesBought} out of 7 days.</strong>`);
  logMessage(`<strong>Total spent: $${totalSpent.toFixed(2)}</strong>`);
  logMessage(
    `<strong>Average sandwich price: $${average(pricesThisWeek).toFixed(2)}</strong>`
  );
  logMessage(`<strong>Money left: $${weeklyBudget.toFixed(2)}</strong>`);

  // Update UI
  document.getElementById("money").textContent = weeklyBudget.toFixed(2);
}

/**
 * Get dynamic weekly allowance ($15–$30)
 */
function getWeeklyBudget() {
  return Math.random() * 15 + 15; // Between $15 and $30
}

/**
 * Get random sandwich price between $0.50 and $1.00
 */
function getSandwichPrice() {
  return parseFloat((Math.random() * 0.5 + 0.5).toFixed(2));
}

/**
 * Reset for new order
 */
function resetGame() {
  weeklyBudget = getWeeklyBudget();
  totalLunchesBought = 0;
  totalSpent = 0;
  pricesThisWeek = [];
  document.getElementById("receipt").innerHTML = "";
  document.getElementById("money").textContent = weeklyBudget.toFixed(2);
}

/**
 * Print to receipt section
 */
function logMessage(msg) {
  document.getElementById("receipt").innerHTML += `<p>${msg}</p>`;
}

/**
 * Helper: Calculate average from array of numbers
 */
function average(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
