const categs = document.querySelectorAll('li.item')
console.log(categs)
console.log("Number of categories:", categs.length)
const categTitle = document.querySelectorAll('h2')
console.log("Category:", categTitle[0].textContent)

const categElems = document.querySelectorAll('li.item > li');
console.log("Elements:", categElems)
//for (let categElem of categElems)
