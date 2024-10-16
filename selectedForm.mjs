import { displayPizzas } from "./displayPizzas.mjs";
import { pizzas } from "./pizzas.mjs";

export function initializeForm() {
  const form = document.getElementById("toppings-form");
  const toppingsList = document.getElementById("toppings-list");
  const toppingsSelect = document.getElementById("toppings");

  if (form && toppingsList && toppingsSelect) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const selectedToppings = Array.from(
        toppingsSelect.selectedOptions,
        ({ value }) => value
      );
      updateSelectedToppingsList(selectedToppings);
      filterAndDisplayPizzas(selectedToppings);
    });
  } else {
    console.error("Required DOM elements are missing.");
  }

  // Display all pizzas when the DOM is fully loaded
  displayPizzas(pizzas);
}

function updateSelectedToppingsList(toppings) {
  const toppingsList = document.getElementById("toppings-list");
  toppingsList.innerHTML = `<h2>${toppings
    .map(
      (topping) =>
        `<span class="badge rounded-pill bg-dark badge-lg mr-1">${topping}</span>`
    )
    .join("")}</h2>`;
}

function filterAndDisplayPizzas(selectedToppings) {
  const filteredPizzas = pizzas.filter((pizza) =>
    selectedToppings.every((topping) => pizza.toppings.includes(topping))
  );

  displayPizzas(filteredPizzas);
}
