"use strict";
const person1 = ['Koridas', 'Atmazas'];
const person2 = ['Paklodijus', 'Pagalvė'];
const person3 = ['Višta', 'Maumedienė'];
let currentAge = 18;
let currentHeight = 180;
const age = [currentAge, () => currentAge += 1];
const height = [currentAge, (h) => {
        if (h)
            currentHeight = h;
    }];
console.group('Tuples - užduotys');
{
    console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
    {
        const personOne = ['Kristijonas', 21];
        const personTwo = ['Agnė', 32];
        const personThree = ['Saulė', 26];
        console.log(personOne);
        console.log(personTwo);
        console.log(personThree);
    }
    console.groupEnd();
    console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
    {
        const ownerPlusDogOne = [{
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
        const ownerPlusDogTwo = [{
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
        const triangaleOne = [[0, 0], [-1, -1], [-2, -2]];
        const traingleTwo = [[4, 0], [4, 7], [7, 0]];
        console.log(triangaleOne);
        console.log(traingleTwo);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=tuples.js.map