
const output = document.querySelector('.output');

let i = 10; 

while(i >= 0) {

    const parag = document.createElement('p');

    if (i === 10) {

        parag.textContent = `Countdown ${i}`;

    } else if (i === 0) {

        parag.textContent = 'Blast off!';

    } else {

        parag.textContent = i;

    }
    
    output.appendChild(parag);

    i--;
}