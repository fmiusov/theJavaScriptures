const task3Element = document.getElementById('task-3');

const nopram = () => {
  alert('No Parameters');
};

const pram = (name) => {
  alert(name);
};

nopram();
pram('Jayson');

task3Element.addEventListener('click', nopram);

const triplePram = (str1, str2, str3) => {
  const combinedStr = str1 + str2 + str3;
  return combinedStr;
};

alert(triplePram('Hi ', 'Hello ', 'Hwhat?'));
