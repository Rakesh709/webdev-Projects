/**
 * Write your challenge solution here
 */

const mainText = document.getElementById('mainHeading');

const redButton = document.getElementById('redButton');
const greenButton = document.getElementById('greenButton');
const blueButton = document.getElementById('blueButton');
const purpleButton = document.getElementById('purpleButton');
const resetButton = document.getElementById('resetButton');

redButton.addEventListener('click', () => (mainText.style.color = '#e74c3c'));
greenButton.addEventListener('click', () => (mainText.style.color = '#2ecc71'));
blueButton.addEventListener('click', () => (mainText.style.color = '#3498db'));
purpleButton.addEventListener(
  'click',
  () => (mainText.style.color = '#9b59b6')
);
resetButton.addEventListener('click', () => (mainText.style.color = '#34495e'));
