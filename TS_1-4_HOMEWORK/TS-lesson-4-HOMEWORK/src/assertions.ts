/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */
/*
  Assertion(Teigimas) - tai papildoma direktyva tiksliau aprašyti tipui, kuomet programuotojui žinoma daugiau
  informacijos nei gali žinoti TypeScript transpiliatorius.

  Įmanoma 'teigti' tik tuos tipus, kurie priklauso potencialių tipų aibei
*/

type PossibleType = string | number;

const someNumber: PossibleType = 17 as number;
const title: PossibleType = 'Grace' as string;

// Šiuo atveju 'teigiame' kad rastas elementas bus būtent form'os elementas.
const formAddUser: HTMLFormElement = document.querySelector('#form-add-user') as HTMLFormElement;
formAddUser.onsubmit = (e) => {
  e.preventDefault();
  console.log('Ateityje pridėsiu vartotoją');
};

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Assertions - užduotys');
{
  // Pirmos užduoties tipų aprašymas
  //
  const buttonElement: HTMLButtonElement = document.querySelector('.click-button') as HTMLButtonElement;
  // Antros užduoties tipų aprašymas
  //
  const divElement: HTMLDivElement = document.querySelector('.squares-wrapper') as HTMLDivElement;
  // Antros užduoties tipų aprašymas
  //
  const paragraphElement: HTMLParagraphElement = document.querySelector('.squares-count') as HTMLParagraphElement;
  //
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
      const square: HTMLSpanElement = document.createElement('span') as HTMLSpanElement;
      square.textContent = '\u{25A1}';
      divElement.append(square);
    });
  }
  console.groupEnd();

  console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
  {
    let count: number = 0;
    buttonElement.addEventListener('click', () => {
      count += 1;
      paragraphElement.innerHTML = `Squares total: ${count}`;
    });
  }
  console.groupEnd();
}
console.groupEnd();
