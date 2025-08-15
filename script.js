/**
 * Author: Raihan Nurrahman
 * Description: Business logic and interactivity for Trade/Buy Calculator
 * Date: 07-08-2025
 */

let mode = "trade"; // Default mode is set to trade

// Function to add a new card input for either customer or seller
function addCard(side) {
  const cardList = document.getElementById(`${side}-cards`);

  // Create a new input field for the card value
  const input = document.createElement("input");
  input.type = "number";
  input.className = "card-value";
  input.placeholder = "Value";
  input.min = 0;
  input.oninput = updateCalculation;

  // Create a wrapper for the input and delete button
  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card-entry");
  cardWrapper.style.display = "flex";
  cardWrapper.style.alignItems = "center";
  cardWrapper.style.gap = "5px";

  // Create a clickable × symbol to remove the card entry  
  const deleteBtn = document.createElement("span");
  deleteBtn.className = "remove-btn";
  deleteBtn.innerHTML = "&times;";
  deleteBtn.title = "Remove card";
  deleteBtn.onclick = () => {
    cardWrapper.remove();
    updateCalculation();
  };

  // Add input and delete button to the wrapper, then to the card list
  cardWrapper.appendChild(input);
  cardWrapper.appendChild(deleteBtn);
  cardList.appendChild(cardWrapper);

  updateCalculation(); // Recalculate totals after adding
}

// Function to switch between trade and buy modes
function switchMode() {
  for (const input of document.getElementsByName("mode")) {
    if (input.checked) {
      mode = input.value;
      break;
    }
  }

  const sellerSection = document.getElementById("seller-section");
  const percentageInput = document.getElementById("percentage-input");

  // Hide seller section in buy mode, show in trade mode
  sellerSection.style.display = mode === "buy" ? "none" : "flex";

  // Automatically set percentage to 70 for buy mode and 80 for trade mode
  percentageInput.value = mode === "buy" ? 70 : 80;

  updateCalculation(); // Recalculate based on new mode
}

// Helper to calculate total card values for customer or seller
function getSumOfCards(side) {
  const cards = document.querySelectorAll(`#${side}-cards input`);
  return Array.from(cards).reduce((sum, card) => sum + (Number(card.value) || 0), 0);
}

// Function to perform calculations and update UI
function updateCalculation() {
  const percentageInput = document.getElementById("percentage-input");
  let percentage = Math.min(100, Math.max(0, Number(percentageInput.value)));
  percentageInput.value = percentage;

  const resultDiv = document.getElementById("result");
  const customerSum = getSumOfCards("customer");
  const sellerSum = getSumOfCards("seller");

  const customerSection = document.getElementById("customer-section");
  const sellerSection = document.getElementById("seller-section");

  if (mode === "trade") {
    // In trade mode, calculate what each party owes
    const sellerOwes = Math.max(0, customerSum * (percentage / 100) - sellerSum);
    const customerOwes = Math.max(0, sellerSum - customerSum * (percentage / 100));

    if (sellerOwes > 0) {
      sellerSection.style.backgroundColor = "#f9d6d5";
      customerSection.style.backgroundColor = "#d5f9d6";
      resultDiv.textContent = `Seller owes: $${sellerOwes.toFixed(2)}`;
    } else if (customerOwes > 0) {
      customerSection.style.backgroundColor = "#f9d6d5";
      sellerSection.style.backgroundColor = "#d5f9d6";
      resultDiv.textContent = `Customer owes: $${customerOwes.toFixed(2)}`;
    } else {
      customerSection.style.backgroundColor = "#d5f9d6";
      sellerSection.style.backgroundColor = "#d5f9d6";
      resultDiv.textContent = "Even swap";
    }
  } else {
    // In buy mode, calculate what buyer owes based on percentage
    const customerOwes = customerSum * (percentage / 100);
    customerSection.style.backgroundColor = "#d7e4fd";
    sellerSection.style.backgroundColor = "transparent";
    resultDiv.textContent = `Buyer owes: $${customerOwes.toFixed(2)}`;
  }
}

// Reset the app to initial state
function resetApp() {
  document.getElementById("customer-cards").innerHTML = "";
  document.getElementById("seller-cards").innerHTML = "";
  document.getElementById("percentage-input").value = 80;
  switchMode();
  updateCalculation();
}

// Initialize the calculator when the page loads
switchMode();
updateCalculation();
window.addCard = addCard;
window.switchMode = switchMode;
window.updateCalculation = updateCalculation;
window.resetApp = resetApp;

