const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

let resultAdmit = '';
let resultRefuse = '';

let i = 0;

do {

    if (people[i] === 'Lola' || people[i] === 'Phil') {

        resultRefuse += people[i] + ', ';

    } else {

        resultAdmit += people[i] + ', ';

    }

    i++;

} while (i < people.length);



const finalAdmit = resultAdmit.slice(0, resultAdmit.length - 2) + '.';
const finalRefuse = resultRefuse.slice(0, resultRefuse.length - 2) + '.';


admitted.textContent = 'Admitted: ' + finalAdmit;
refused.textContent = 'Refused: ' + finalRefuse;