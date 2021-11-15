const validInput = document.getElementById("validation-input");
const inputLen = validInput.getAttribute('data-length')    
console.log(validInput.value.length);
      validInput.addEventListener('blur', onInputBlur);

      function onInputBlur(event)  { 
            console.log(validInput.value.length);        
      if (inputLen > validInput.value.length) { 
       validInput.classList.remove('valid');
        validInput.classList.add('invalid');
      } else {
        validInput.classList.remove('invalid');
        validInput.classList.add('valid');
      }
    };