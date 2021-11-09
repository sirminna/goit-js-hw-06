const validInput = document.querySelector('input');
const inputLen = validInput.getAttribute('data-length')
const inputId = validInput.getAttribute('id')
console.log(validInput)
console.log(inputLen)
console.log(inputId)
// console.log(validInput.data-length)
validInput.addEventListener('blur', onInputBlur);

      function onInputBlur(event) {
         
if (validInput.value.length  === inputLen) {
 console.log('hfhfhf');
//validInput.setAttribute('id', 'validation-input.valid');
}
    console.log('Инпут потерял фокус - событие blur');
  }
  