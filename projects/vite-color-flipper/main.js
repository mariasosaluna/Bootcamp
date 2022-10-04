import './style.css';

const COLOR_PALETTE = [
  {color: '#A2FAA3', name: 'Mint Green'},
  {color: '#92C9B1', name: 'Turquoise Green'},
  {color: '#4F759B', name: 'Blue Yonder'},
  {color: '#5D5179', name: 'Purple Navy'},
  {color: '#571F4E', name: 'Palatinate Purple'},
];

const addButtonToColorPicker = () => {
  let buttonContainer = document.querySelector(".block");

  COLOR_PALETTE.forEach((color) => {
    let button = document.createElement('button');
    button.innerHTML = color.name;
    button.style.backgroundColor = color.color;

    button.addEventListener("click", (event) => {
      document.body.style.backgroundColor = color.color;
    });

    buttonContainer.appendChild(button);
    console.log(color);
  });
}

addButtonToColorPicker();