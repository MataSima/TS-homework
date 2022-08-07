/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */
console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
//
// Assume that the following array of drink objects needs to be sorted:
  type Drink = {
    name: string,
    price: number,
  };
  const drinks: Drink[] = [
    { name: 'lemonade', price: 50 },
    { name: 'lime', price: 10 },
    { name: 'coke', price: 20 },
    { name: 'water', price: 5 },
  ];

  function compare(a:Drink, b: Drink) {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  }

  drinks.sort(compare);
  console.log(drinks);
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
// Given three arguments ⁠— an object OBJ of the stolen items, the pets NAME and a VALUE ⁠— return an object with that name and value in it (as key-value pairs).

  // For example*******************************************
  // addName({}, "Brutus", 300) ➞ { Brutus: 300 }
  // addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }
  // addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }

type StolenObj = {
  [key:string] : number,
};
const addName = (object: StolenObj, nameStr:string, value:number): StolenObj => ({ ...object, [nameStr]: value });
const stolenObj1: StolenObj = addName({}, 'Brutus', 300);
console.log(stolenObj1);
const stolenObj2 = addName(stolenObj1, 'Piano', 500);
console.log(stolenObj2);
const stolenObj3 = addName(stolenObj2, 'Stereo', 300);
console.log(stolenObj3);
const stolenObj4 = addName(stolenObj3, 'Caligula', 440);
console.log(stolenObj4);
}
console.groupEnd();
