const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];

const inputName = document.querySelector('.searchName');
const parag = document.querySelector('.parag');
const searchBtn = document.querySelector('.search');

searchBtn.addEventListener('click', (e) => {
    e.stopPropagation();

    // Assign a place holder
    const searchName = inputName.value.toLowerCase();

    // Reset the input
    inputName.value = '';
    inputName.focus();
    inputName.textContent = '';

    for (const contact of contacts) {

        const splitContact = contact.split(':');

        if (splitContact[0].toLowerCase() === searchName) {

            parag.textContent = `${splitContact[0]} 's number is ${splitContact[1]}`;

            // This break line ensures that when there is a match, the loop stops. Otherwise, it will only return true if the name you entered also matches the last name on the contacts array.
            break; 

        } else {
            parag.textContent = `${searchName} is not found on the list of contacts!`;
        }

    }

});