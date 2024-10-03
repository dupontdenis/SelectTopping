import { pizzas } from "./pizzas.mjs";
import { displayPizzas } from "./displayPizzas.mjs";
import { initializeForm } from "./selectedForm.mjs";

initializeForm();
displayPizzas(pizzas);
