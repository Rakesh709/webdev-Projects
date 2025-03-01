

const switchButton = document.getElementById('toggleButton');
const bulbStatus = document.getElementById('status');
const bulbLight = document.getElementById('bulb');

switchButton.addEventListener('click', () => {
  if (switchButton.innerText === 'Turn On') {
    switchButton.innerText = 'Turn Off';
    bulbStatus.innerText = 'Status: On';
    document.body.style.backgroundColor = '#333';
    bulbLight.style.background = '#f1c40f';
    document.body.style.color = '#ffffff';
  } else {
    switchButton.innerText = 'Turn On';
    bulbStatus.innerText = 'Status: Off';
    document.body.style.backgroundColor = '#ffffff';
    bulbLight.style.backgroundColor = '#95a5a6';
    document.body.style.color = '#1a1a1a';
  }
});
