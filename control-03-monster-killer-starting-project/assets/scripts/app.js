const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHeatlh = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHeatlh -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHeatlh > 0) {
    alert('You won!');
  } else if (currentPlayerHeatlh <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
  } else if (currentPlayerHeatlh <= 0 && currentMonsterHealth <= 0) {
    alert('There is a draw!');
  }
}

function strongAttackHandler() {
  const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHeatlh -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHeatlh > 0) {
    alert('You won!');
  } else if (currentPlayerHeatlh <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
  } else if (currentPlayerHeatlh <= 0 && currentMonsterHealth <= 0) {
    alert('There is a draw!');
  }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
