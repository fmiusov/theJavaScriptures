const sayHello = (name = 'Jayson') => {
  console.log('Hi ' + name);
};

sayHello();

// WILL NOT GO THROUGH ALL STRINGS
// const checkInput = (cb, ...unlimited) => {
//   unlimited === '' ? alert('invalid string') : cb();
// }

const checkInput = (cb, ...strings) => {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
};

checkInput(
  () => {
    console.log('All not empty');
  },
  'Hello',
  '12',
  'asdfs'
);
