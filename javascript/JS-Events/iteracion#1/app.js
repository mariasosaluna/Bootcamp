let button = document.getElementById('btnToClick');
button.addEventListener("click", (event) => {
  console.log(event);
});

let focusInput = document.querySelector('.focus');
focusInput.addEventListener("focus", (event) => {
  console.log(event.target.value);
});

let input = document.querySelector('.value');
input.addEventListener("input", (event) => {
  console.log(event.target.value);
});


