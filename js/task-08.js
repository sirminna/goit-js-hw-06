const form = document.querySelector('.login-form');
const email = document.querySelector(".email");
const password = document.querySelector(".password");
console.log(email)
console.log(password)
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
if (email === '')
alert('UHGY') 
  const formData = new FormData(event.currentTarget);

  console.log(formData);

  formData.forEach((email, password) => {
    console.log("email");
   
 });
}
