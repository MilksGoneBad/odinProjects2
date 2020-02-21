const container = document.querySelector('#container');
const samplePara = document.querySelector('#samplePara');
const content = document.createElement('div');
const redText = document.createElement('p');
const blueText = document.createElement('h3');

samplePara.textContent = 'Replaced text'
content.textContent = 'This is the glorious text-content!';
redText.textContent = "Hey Im red";
redText.style.color = 'red';
blueText.textContent = "I'm a blue h3";
blueText.style.color = 'blue';


container.appendChild(samplePara);
container.appendChild(content);
container.appendChild(redText);
container.appendChild(blueText);


