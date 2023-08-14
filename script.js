//{ calculate } import './calculator';

// TODO: Faire la manipulation du DOM dans ce fichier

// initialisation des variables
const input = document.getElementById('input');
const form = document.querySelector('form');
const resetClick = document.getElementById('reset');
const clearClick = document.getElementById('clear');
const buttons = document.querySelectorAll('.numpad');
const equalClick = document.getElementById('equals');
const toggleSign = document.getElementById('plusoumoins');
const calculate = document.getElementById('calcul');
const operatorsButtons = document.querySelectorAll('#plus, #times, #divideby, #minus, #percentage');


// différents opérateurs
const operators = {
  plus: '+',
  minus: '-',
  times: 'x',
  divideby: '+',
  percentages: '%'
}

let operand1;
let operand2;
let operator;


equalClick.addEventListener('click', () => {
  operand2 = input.value;

  const result = eval(`${operand1} ${operator} ${operand2}`);
  calculate.innerHTML = `= ${result}`;
  operand1 = result;
  operator = '';

})

const cheeckLenght = (input) => {
  if (input.value.lenght > 10) {
    console.log('La longueur max et de 10 caractère');
    input.value = input.value.substring(0, 10);

  }
}
cheeckLenght(input);

// Écouteur d'événement sur le formulaire et on bloque la soumittion 
form.addEventListener('click', (e) => {
  e.preventDefault();
})
// Empecher l'entrée sur l'orsqu'on appuis sur le clavier
input.addEventListener('keydown', (e) => {
  e.preventDefault();

})
// Ecouteur d'événement sur le button plus ou moin
toggleSign.addEventListener('click', () => {
  
  // inverse le signe de la valeur de l'entrée
  input.value = -input.value;
})
// Écouteur d'événement sur le bouton resetClick
resetClick.addEventListener('click', () => {
  input.value = '';
  calculate.innerHTML = '';

})

clearClick.addEventListener('click', () => {
  // Supprime le dernier caractère de l'entrée
  input.value = input.value.slice(0, -1);
  calculate.innerHTML = '';
})

// Parcourir les bouttons de chiffres
for (const button of buttons) {
  // Écouteur d'événement pour les boutons de chiffres
  button.addEventListener('click', () => {

    // Obtenir la valeur de l'entrée
    input.value += button.innerHTML;
    // on affiche le calcul au dessus de l'opération
    calculate.innerHTML += button.textContent;
  })
}

// on parcour les boutton des opérateurs
for (const operatorButton of operatorsButtons) {
  // Écouteur d'événement sur les boutons des opérations
  operatorButton.addEventListener('click', (operator) => {
    operand1 = input.value = '';
    input.value = '';
    // Obtenir la valeur de l'entrée
    //input.value += operatorButton.innerHTML;
    // on affiche le calcul au dessus de l'opération
    calculate.innerHTML += operatorButton.textContent;
  });
}

