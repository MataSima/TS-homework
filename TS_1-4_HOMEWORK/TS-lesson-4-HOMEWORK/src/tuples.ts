/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */
/*
  Tuple(rinkinys) - tai masyvas su greižtai nurodytais masyvo elemento tipais ir jų seka.
  Šis tipas neleidžia turėti kitokį kiekį, ar kitokio tipo elementų
*/
type FullnameTuple = [string, string];
type UseNumericStateTuple = [number, (num?: number) => void];

const person1: FullnameTuple = ['Koridas', 'Atmazas'];
const person2: FullnameTuple = ['Paklodijus', 'Pagalvė'];
const person3: FullnameTuple = ['Višta', 'Maumedienė'];

let currentAge: number = 18;
let currentHeight: number = 180;
const age: UseNumericStateTuple = [currentAge, () => currentAge += 1];
const height: UseNumericStateTuple = [currentAge, (h) => {
  if (h) currentHeight = h;
}];

// Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Tuples - užduotys');
{
  // Tipo aprašymas pirmai užduočiai:
  //
  type NameAgeTuple = [string, number];
  // Tipų aprašymas antrai užduočiai:
  //
  type OwnerType = {
    name: string,
    age:number,
    gender: 'male' | 'female',
  };
  type DogType = {
    name: string,
    age: number,
    breed: 'Husky' | 'Tax' | 'Terrier' | 'Jack-Russel Terrier',
  };
  type OwnerDogTuple = [OwnerType, DogType];
  // Tipų aprašymas trečiai užduočiai:
  //
  type PointA = [number, number];
  type PointB = [number, number];
  type PointC = [number, number];
  type TriangleABC = [PointA, PointB, PointC];

  console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
  {
    const personOne: NameAgeTuple = ['Kristijonas', 21];
    const personTwo: NameAgeTuple = ['Agnė', 32];
    const personThree: NameAgeTuple = ['Saulė', 26];

    console.log(personOne);
    console.log(personTwo);
    console.log(personThree);
  }
  console.groupEnd();

  console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
  {
    const ownerPlusDogOne: OwnerDogTuple = [{
      name: 'Lukas',
      age: 22,
      gender: 'male',
    },
    {
      name: 'Saulėgrąža',
      age: 2,
      breed: 'Husky',
    },
    ];
    const ownerPlusDogTwo: OwnerDogTuple = [{
      name: 'Salomėja',
      age: 27,
      gender: 'female',
    },
    {
      name: 'Kruopa',
      age: 1,
      breed: 'Jack-Russel Terrier',
    },
    ];
    console.log(ownerPlusDogOne);
    console.log(ownerPlusDogTwo);
  }
  console.groupEnd();

  console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
  {
    const triangaleOne: TriangleABC = [[0, 0], [-1, -1], [-2, -2]];
    const traingleTwo: TriangleABC = [[4, 0], [4, 7], [7, 0]];
    console.log(triangaleOne);
    console.log(traingleTwo);
  }
  console.groupEnd();
}
console.groupEnd();
