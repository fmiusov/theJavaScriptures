const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'blue';
section.className = 'red-bg';

button.addEventListener('click', () => {
  // section.className === 'red-bg visible'
  //   ? (section.className = 'red-bg invisible')
  //   : (section.className = 'red-bg visible');
  // section.classList.toggle('visible');
  section.classList.toggle('invisible');
});
