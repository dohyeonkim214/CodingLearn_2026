const priceInput = document.getElementById("priceInput");
const tipButtons = document.getElementById("tipButtons");
const finalPrice = document.getElementById("finalPrice");
const foodGrid = document.getElementById("foodGrid");
const calculator = document.getElementById("calculator");
const selectedFood = document.getElementById("selectedFood");
const changeFoodButton = document.getElementById("changeFoodButton");

let selectedTip = 10;

function formatUSD(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
}

function calculateFinalPrice() {
  const rawPrice = Number(priceInput.value);
  const basePrice = Number.isFinite(rawPrice) && rawPrice > 0 ? rawPrice : 0;
  const total = basePrice * (1 + selectedTip / 100);
  finalPrice.textContent = formatUSD(total);
}

function setActiveTipButton(targetTip) {
  const buttons = tipButtons.querySelectorAll("button");
  buttons.forEach((button) => {
    if (Number(button.dataset.tip) === targetTip) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

function setActiveFoodButton(targetButton) {
  const foodButtons = foodGrid.querySelectorAll(".food-option");
  foodButtons.forEach((button) => {
    button.classList.toggle("active", button === targetButton);
  });
}

function selectFood(button) {
  const price = Number(button.dataset.price);
  const foodName = button.dataset.name;

  priceInput.value = Number.isFinite(price) ? price.toFixed(2) : "0.00";
  selectedFood.textContent = foodName;
  calculator.hidden = false;
  setActiveFoodButton(button);
  calculateFinalPrice();
}

tipButtons.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-tip]");
  if (!button) {
    return;
  }

  selectedTip = Number(button.dataset.tip);
  setActiveTipButton(selectedTip);
  calculateFinalPrice();
});

foodGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".food-option");
  if (!button) {
    return;
  }

  selectFood(button);
});

changeFoodButton.addEventListener("click", () => {
  calculator.hidden = true;
  selectedFood.textContent = "-";
  priceInput.value = "";
  finalPrice.textContent = formatUSD(0);
  setActiveFoodButton(null);
});

calculateFinalPrice();
