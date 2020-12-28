/** @format */

const pressed = [];
const secretCode = 'java';

var currentDiv = document.querySelector('.main-div');

function addElement() {
  var newElement = document.createElement('h1');
  var newContent = document.createTextNode(
    'You have opened a secret path...(this is javascript text)'
  );
  newElement.style.color = '#3282b8';
  newElement.style.fontWeight = '900';
  newElement.appendChild(newContent);
  currentDiv.insertAdjacentElement(
    'afterbegin',
    newElement
  );
}

function addImage() {
  var img = document.createElement('img');
  img.setAttribute('src', 'image/door.jpg');
  img.setAttribute('alt', 'na');
  img.setAttribute('height', '600px');
  img.setAttribute('width', '400px');
  document.body.appendChild(img);
  currentDiv.insertAdjacentElement('afterbegin', img);
}

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(
    -secretCode.length - 1,
    pressed.length - secretCode.length
  );
  if (pressed.join('').includes(secretCode)) {
    console.log('Ding Ding');
    addElement();
    addImage();
  }
  console.log(pressed);
});
