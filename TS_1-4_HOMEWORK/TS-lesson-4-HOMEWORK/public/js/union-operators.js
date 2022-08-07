"use strict";
const id1 = '1321354';
const id2 = 17;
const id3 = 47;
const id4 = 'asdasdas';
const id5 = 47;
const id6 = 'sdfsdfdsfsdf';
const id7 = true;
const call = (callee) => {
    if (typeof callee === 'string') {
        console.log('Skambinama:', callee);
    }
    else {
        console.log('Skambinama:', callee.mobile);
    }
};
const data1 = [1, 5, 'burundukas', 8, 'siurprizas', 7];
const data2 = [1, 5, 'burundukas', 8, 'siurprizas', 7];
const flags1 = [1, 1, 0, 0, 0, 1, 1];
const flags2 = [true, false, false, true, true];
console.group('Union operators - užduotys');
{
    console.group('1. Aprašykite objekto tipą Accommodation, kurio savybė "type" būtų, "House" arba "Flat"');
    {
        const rentVilnius = {
            type: 'House',
            price: 600,
            available: true,
        };
        const rentKaunas = {
            type: 'Flat',
            price: 200,
            available: false,
        };
        const rentKlaipėda = {
            type: 'Flat',
            price: 300,
            available: true,
        };
        console.log(rentVilnius);
        console.log(rentKaunas);
        console.log(rentKlaipėda);
    }
    console.groupEnd();
    console.group('2. Aprašykite objekto tipą Car, kurio savybė "transmission" būtų, "Automatic" arba "Manual"');
    {
        const carOne = {
            brand: 'Opel',
            transmision: 'Automatic',
            produced: 2000,
        };
        const carTwo = {
            brand: 'Audi',
            transmision: 'Flat',
            produced: 2010,
        };
        const carThree = {
            brand: 'VW',
            transmision: 'Automatic',
            produced: 1992,
        };
        console.log(carOne);
        console.log(carTwo);
        console.log(carThree);
    }
    console.groupEnd();
    console.group('3. Aprašykite tipą, kuris kintamajam leistų būti: arba Accommodation masyvu, arba Car masyvu');
    {
        const rentVilnius = {
            type: 'House',
            price: 600,
            available: true,
        };
        const rentKaunas = {
            type: 'Flat',
            price: 200,
            available: false,
        };
        const rentKlaipėda = {
            type: 'Flat',
            price: 300,
            available: true,
        };
        const carOne = {
            brand: 'Opel',
            transmision: 'Automatic',
            produced: 2000,
        };
        const carTwo = {
            brand: 'Audi',
            transmision: 'Flat',
            produced: 2010,
        };
        const carThree = {
            brand: 'VW',
            transmision: 'Automatic',
            produced: 1992,
        };
        const rentList = [rentVilnius, rentKaunas, rentKlaipėda];
        const carList = [carOne, carTwo, carThree];
        console.log(rentList);
        console.log(carList);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=union-operators.js.map