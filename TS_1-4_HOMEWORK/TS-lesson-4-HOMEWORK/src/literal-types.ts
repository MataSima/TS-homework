/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */
/*
  literal-types(konkretūs tipai) - tai tipai sudaryti iš konkrečių reikšmių
*/

type Latvia = 'Latvia';
type Lithuania = 'Lithuania';
type Estonia = 'Estonia';
const country: Latvia = 'Latvia';

type BalticCountry = Latvia | Lithuania | Estonia;
const country2 = 'Estonia';

type HttpType = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

type HttpRequest = {
  url: string,
  headers?: {
    [key: string]: string,
  },
  body?: {
    [key: string]: string,
  }
  method: HttpType,
};

const req1 = {
  url: 'https://tavo-veidas.lt',
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'GET',
};

const req2 = {
  url: 'https://tavo-veidas.lt/api/',
  headers: {
    Authorization: 'Bearer fhdguisdf8g76sdf89ghf5..?sfg',
    'Content-Type': 'application/json',
  },
  body: {
    image: 'https://i.pinimg.com/474x/67/0a/1d/670a1d06e7bff426ec343e8c06c93ca5--crazy-faces-strange-people.jpg',
  },
  method: 'POST',
};

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
  // Tipai pirmai užduočiai:
  //
  type Berlin = 'Berlin';
  type Hamburg = 'Hmburg';
  type Munich = 'Munich';
  type Cologne = 'Cologne';
  type Frankfurt = 'Frankfurt am Main';
  type GermanCity = Berlin | Hamburg | Munich | Cologne | Frankfurt;
  // Tipai antrai užduočiai:
  //
  type Terrier = 'Terrier';
  type Collie = 'Collie';
  type Bulldog = 'Buldog';
  type GermanShepherd = 'German Shepherd';
  type Husky = 'Husky';
  type DogBreed = Terrier | Collie | Bulldog | GermanShepherd | Husky;
  // Tipai trečiai užduočiai:
  //
  type BreakPads = 'Break pads';
  type Radiator = 'Radiator';
  type Bumper = 'Bumper';
  type HeadLigts = 'Head lights';
  type TailLights = 'Tail lights';
  type CarPart = BreakPads | Radiator | Bumper | HeadLigts | TailLights;
  console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
  {
    const germanCityOne: GermanCity = 'Frankfurt am Main';
    const germanCityTwo: GermanCity = 'Berlin';
    console.log(germanCityOne);
    console.log(germanCityTwo);
  }
  console.groupEnd();

  console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
  {
    const dogBreedOne: DogBreed = 'German Shepherd';
    const dogBreedTwo: DogBreed = 'Collie';
    console.log(dogBreedOne);
    console.log(dogBreedTwo);
  }
  console.groupEnd();

  console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
  {
    const carPartOne: CarPart = 'Head lights';
    const carPartTwo: CarPart = 'Tail lights';
    console.log(carPartOne);
    console.log(carPartTwo);
  }
  console.groupEnd();
}
console.groupEnd();
