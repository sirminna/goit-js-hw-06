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
const element = ingredients.map((ingredient) => {
const ingredientsElem = document.createElement("li");
//ingredientsElem.textContent = ingredient;
//ingredientsElem.classList.add("item");
return console.log(ingredientsElem) } );
console.log(element)
ingredientsEl.append(...element)
