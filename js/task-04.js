const incrementBtn = document.querySelector('[data-action="increment"]')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const spanBtn = document.querySelector('#value')
 let counterValue =0;
 const increment = () => {
    counterValue += 1;
  
    document.getElementById('value').textContent = counterValue;
  };
  
  const decrement = () => {
    counterValue -= 1;
  
    document.getElementById('value').textContent = counterValue;
  };

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
