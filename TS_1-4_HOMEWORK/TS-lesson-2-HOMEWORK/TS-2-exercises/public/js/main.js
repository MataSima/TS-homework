"use strict";
console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    const drinks = [
        { name: 'lemonade', price: 50 },
        { name: 'lime', price: 10 },
        { name: 'coke', price: 20 },
        { name: 'water', price: 5 },
    ];
    function compare(a, b) {
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
    const addName = (object, nameStr, value) => (Object.assign(Object.assign({}, object), { [nameStr]: value }));
    const stolenObj1 = addName({}, 'Brutus', 300);
    console.log(stolenObj1);
    const stolenObj2 = addName(stolenObj1, 'Piano', 500);
    console.log(stolenObj2);
    const stolenObj3 = addName(stolenObj2, 'Stereo', 300);
    console.log(stolenObj3);
    const stolenObj4 = addName(stolenObj3, 'Caligula', 440);
    console.log(stolenObj4);
}
console.groupEnd();
//# sourceMappingURL=main.js.map