const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector("ul");
console.log(ingredientsEl)
const elements = ingredients.map(ingredient => {
const ingredientsElem = document.createElement("li");
ingredientsElem.textContent = ingredient;
ingredientsElem.classList.add("item");
  return ingredientsElem;
});
console.log(elements)
ingredientsEl.append(...elements)
