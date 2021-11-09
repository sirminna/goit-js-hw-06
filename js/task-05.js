const refs = {
    input: document.querySelector("#name-input"),
    span: document.querySelector("#name-output"),
}
console.log(refs)
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value === " ") {
    refs.span.textContent = `Anonymous`; }

    refs.span.textContent = event.currentTarget.value; }