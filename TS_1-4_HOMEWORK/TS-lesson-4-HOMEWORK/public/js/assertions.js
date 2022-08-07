"use strict";
const someNumber = 17;
const title = 'Grace';
const formAddUser = document.querySelector('#form-add-user');
formAddUser.onsubmit = (e) => {
    e.preventDefault();
    console.log('Ateityje pridėsiu vartotoją');
};
console.group('Assertions - užduotys');
{
    const buttonElement = document.querySelector('.click-button');
    const divElement = document.querySelector('.squares-wrapper');
    const paragraphElement = document.querySelector('.squares-count');
    console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
    {
        buttonElement.addEventListener('click', () => {
            console.log('Paspausta');
        });
    }
    console.groupEnd();
    console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
    {
        buttonElement.addEventListener('click', () => {
            const square = document.createElement('span');
            square.textContent = '\u{25A1}';
            divElement.append(square);
        });
    }
    console.groupEnd();
    console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
    {
        let count = 0;
        buttonElement.addEventListener('click', () => {
            count += 1;
            paragraphElement.innerHTML = `Squares total: ${count}`;
        });
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=assertions.js.map