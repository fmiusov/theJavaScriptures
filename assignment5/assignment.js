const task1 = document.getElementById('task-1');
const otherTask1 = document.querySelector('li:first-of-type');
const headEl = document.querySelector('title');
const otherHeadEl = document.head.querySelector('title');
const h1 = document.querySelector('h1');

task1.style.backgroundColor = 'black';
otherTask1.style.color = 'white';
headEl.textContent = 'Assignment - Solved!';
h1.textContent = 'Assignment - Solved!';
