/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

// Globalūs masyvai 1*****************************************************************************

const numbersArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const treesArr : string[] = ['Liepa', 'Maumedis', 'Eglė', 'Pušis', 'Klevas', 'Kaštonas', 'Beržas'];
console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  const lastElementIndex = (arr:any[]):number => arr.length - 1;

  console.table({
    'Last numbers array element index is:': lastElementIndex(numbersArr),
    'Last trees array element index is:': lastElementIndex(treesArr),
    empty: undefined,
  });
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');

const arrIndex = (arr: any[]):void => {
  for (let i = 0; i < arr.length; i += 1) {
    const results = i;
    console.log(results);
  }
};
console.group(`Array [${numbersArr}] elements index list:`);
arrIndex(numbersArr);
console.groupEnd();

console.group(`Array [${treesArr}] elements index list:`);
arrIndex(treesArr);
console.groupEnd();
console.groupEnd();
console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  const arrValue = (arr: any[]): any => {
    for (let i = 0; i < arr.length; i += 1) {
      const results = arr[i];
      console.log(results);
    }
  };
  console.group(`Array [${numbersArr}] elements values list:`);
  arrValue(numbersArr);
  console.groupEnd();

  console.group(`Array [${treesArr}] elements values list:`);
  arrValue(treesArr);
  console.groupEnd();
}
console.groupEnd();

console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  const arrIndexValue = (arr: any[]): any => {
    for (let i = 0; i < arr.length; i += 1) {
      const index = i;
      const value = arr[i];
      console.log(`[${index}] => ${value}`);
    }
  };
  console.group(`Array [${numbersArr}] elements list:`);
  arrIndexValue(numbersArr);
  console.groupEnd();

  console.group(`Array [${treesArr}] elements list:`);
  arrIndexValue(treesArr);
  console.groupEnd();
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  const reverseArr = (arr: any[]):any[] => arr.reverse();

  console.log(`Reverse arr [${numbersArr}] order:`, reverseArr(numbersArr));
  console.log(`Reverse arr [${treesArr}] order:`, reverseArr(treesArr));
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  const arrIndexRow = (arr: any[]): number[] => {
    const results = [];
    for (let i = 0; i < arr.length; i += 1) {
      results.push(i);
    }
    return results;
  };
  console.log(`Array [${numbersArr}] index'es in a row: ${[...arrIndexRow(numbersArr)]}`);
  console.log(`Array [${treesArr}] index'es in a row: ${[...arrIndexRow(treesArr)]}`);
}
console.groupEnd();

console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
  const arrValueRow = (arr: any[]): number[] => {
    const results = [];
    for (let i = 0; i < arr.length; i += 1) {
      results.push(arr[i]);
    }
    return results;
  };
  console.log(`Array [${numbersArr}] values in a row: ${[...arrValueRow(numbersArr)]}`);
  console.log(`Array [${treesArr}] values in a row: ${[...arrValueRow(treesArr)]}`);
}
console.groupEnd();

console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17, [1]=>8, [2]=>88 ..
{
  const arrValueIndexRow = (arr: any[]): number[] => {
    const results: any[] = [];
    for (let i = 0; i < arr.length; i += 1) {
      const elementRow = `[${i}] => ${arr[i]}`;
      results.push(elementRow);
    }
    return results;
  };
  console.log(`Array [${numbersArr}] index and value: ${[...arrValueIndexRow(numbersArr)]}`);
  console.log(`Array [${treesArr}] index and value: ${[...arrValueIndexRow(treesArr)]}`);
}
console.groupEnd();

// Globalūs skaičių masyvai *************************************************************************************

const randomsNumbers1: number[] = [1, 5, 14, 6, 7, 10, 11, 3, 7];
const randomsNumbers2: number[] = [1.5, 2.1, 6.6, 2.5, 4.8, 1.4, 3.5, 1, 2, 3];

console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
  const numberMultiplier = (arr: number[]): number[] => arr.map((element) => element * 2);
  console.log(`Array [${randomsNumbers1}] elements multiplied by 2 = [${numberMultiplier(randomsNumbers1)}]`);
  console.log(`Array [${randomsNumbers2}] elements multiplied by 2 = [${numberMultiplier(randomsNumbers2)}]`);
}
console.groupEnd();

console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
  const numberSuqared = (arr: number[]): number[] => arr.map((element) => element ** 2);
  console.log(`Array [${randomsNumbers1}] elements squared = [${numberSuqared(randomsNumbers1)}]`);
  console.log(`Array [${randomsNumbers2}] elements squared = [${numberSuqared(randomsNumbers2)}]`);
}
console.groupEnd();

console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
  const numberMultiplierIndex = (arr: number[]): number[] => arr.map((element, index) => element * index);
  console.log(`Array [${randomsNumbers1}] elements multiplied by index = [${numberMultiplierIndex(randomsNumbers1)}]`);
  console.log(`Array [${randomsNumbers2}] elements multiplied by index = [${numberMultiplierIndex(randomsNumbers2)}]`);
}
console.groupEnd();

// Globalūs skaičių masyvai *************************************************************************************

const randomsNumbers3: number[] = [1, -5, 14, -6, -7, 10, 11, -3, 7];
const randomsNumbers4: number[] = [1.5, -2.1, 6.6, -2.5, -4.8, 1.4, 3.5, 1, -2, -3];

console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
  const positiveNumbers = (array:number[]): number[] => array.filter((number) => number > 0);

  console.log(`Array [${randomsNumbers3}] filtered by positive numbers = [${positiveNumbers(randomsNumbers3)}]`);
  console.log(`Array [${randomsNumbers4}] filtered by positive numbers = [${positiveNumbers(randomsNumbers4)}]`);
}
console.groupEnd();

console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
  const nonPositiveNumbers = (array:number[]): number[] => array.filter((number) => number <= 0);

  console.log(`Array [${randomsNumbers3}] filtered by non positive numbers = [${nonPositiveNumbers(randomsNumbers3)}]`);
  console.log(`Array [${randomsNumbers4}] filtered by non positive numbers = [${nonPositiveNumbers(randomsNumbers4)}]`);
}
console.groupEnd();

console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
  const equalNumbers = (array:number[]): number[] => array.filter((number) => number % 2 === 0);

  console.log(`Array [${randomsNumbers3}] filtered by equal numbers = [${equalNumbers(randomsNumbers3)}]`);
  console.log(`Array [${randomsNumbers4}] filtered by equal numbers = [${equalNumbers(randomsNumbers4)}]`);
}
console.groupEnd();

console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
  const nonEquallNumbers = (array:number[]): number[] => array.filter((number) => number % 2 !== 0);

  console.log(`Array [${randomsNumbers3}] filtered by non-equal numbers = [${nonEquallNumbers(randomsNumbers3)}]`);
  console.log(`Array [${randomsNumbers4}] filtered by non-equal numbers = [${nonEquallNumbers(randomsNumbers4)}]`);
}
console.log(randomsNumbers3);
console.groupEnd();

console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
  function positiveNumbersConverter(array: number[]):number[] {
    return array.map((element) => (element < 0 ? element * -1 : element));
  }
  console.log(positiveNumbersConverter(randomsNumbers3));
  console.log(positiveNumbersConverter(randomsNumbers4));
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();
