const categs = document.querySelectorAll('li.item')
console.log("Number of categories:", categs.length)
//const categTitle = document.querySelectorAll('h2')
//console.log("Category:", categTitle[0].textContent)

//const categElems = document.querySelectorAll('li.item > li');
//console.log("Elements:", categElems)
//for (let categElem of categElems)

const categoriesArray = [...categs]
  .map(
    categories => `Category: ${categories.children[0].textContent}
    Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);