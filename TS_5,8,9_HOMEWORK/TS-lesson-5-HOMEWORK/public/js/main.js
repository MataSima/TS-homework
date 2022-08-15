"use strict";
const people = [
    {
        name: 'Jonas',
        surname: 'Jonaitis',
        sex: 'male',
        age: 26,
        income: 1200,
        married: false,
        hasCar: false,
    },
    {
        name: 'Severija',
        surname: 'Piktutytė',
        sex: 'female',
        age: 26,
        income: 1300,
        married: false,
        hasCar: true,
    },
    {
        name: 'Valdas',
        surname: 'Vilktorinas',
        sex: 'male',
        age: 16,
        income: 0,
        married: false,
        hasCar: false,
    },
    {
        name: 'Virginijus',
        surname: 'Uostauskas',
        sex: 'male',
        age: 32,
        income: 2400,
        married: true,
        hasCar: true,
    },
    {
        name: 'Samanta',
        surname: 'Uostauskienė',
        sex: 'female',
        age: 28,
        income: 1200,
        married: true,
        hasCar: true,
    },
    {
        name: 'Janina',
        surname: 'Stalautinskienė',
        sex: 'female',
        age: 72,
        income: 364,
        married: false,
        hasCar: false,
    },
];
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
    const personToIdentity = ({ name, surname }) => ({ name, surname });
    const identities = people.map(personToIdentity);
    console.table(people);
    console.table(identities);
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
    const selectTaskProps = ({ married, hasCar }) => ({
        married: Boolean(married),
        hasCar: Boolean(hasCar),
    });
    const result = people.map(selectTaskProps);
    console.table(people);
    console.table(result);
}
console.groupEnd();
console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
    const nameSurnameMarried = ({ name, surname, married }) => ({
        name, surname, married,
    });
    const taskThreeResult = people.map(nameSurnameMarried);
    console.log('Initial people array:');
    console.table(people);
    console.log('People and their married status:');
    console.table(taskThreeResult);
}
console.groupEnd();
console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
    const sexIncome = ({ sex, income }) => ({ sex, income });
    const taskFourResult = people.map(sexIncome);
    console.log('Initial people array:');
    console.table(people);
    console.log('Income by sex:');
    console.table(taskFourResult);
}
console.groupEnd();
console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
    const nameSurnameSex = ({ name, surname, sex }) => ({ name, surname, sex });
    const taskFiveResult = people.map(nameSurnameSex);
    console.log('Initial people array:');
    console.table(people);
    console.log('People by sex:');
    console.table(taskFiveResult);
}
console.groupEnd();
console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
    const maleArr = [];
    const menFilter = ({ sex }) => sex === 'male';
    const allMen = people.map((personObj) => {
        if (menFilter(personObj) === true) {
            maleArr.push(personObj);
        }
        return personObj;
    });
    console.log(allMen);
    console.log('Initial people array:');
    console.table(people);
    console.log('All men data:');
    console.table(maleArr);
}
console.groupEnd();
console.groupCollapsed('7. Atspausdinkite visas moteris');
{
    const femaleFilter = ({ sex }) => sex === 'female';
    const femaleArr = people.filter(femaleFilter);
    console.log('Initial people array:');
    console.table(people);
    console.log('All female data:');
    console.table(femaleArr);
}
console.groupEnd();
console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
    const hasCarFilter = ({ hasCar }) => hasCar === true;
    const personWithCarArr = people.filter(hasCarFilter);
    const nameSurnamECar = ({ name, surname }) => ({ name, surname });
    const hasCarArr = personWithCarArr.map(nameSurnamECar);
    console.log('Initial people array:');
    console.table(people);
    console.log('People with a driving lisece:');
    console.table(hasCarArr);
}
console.groupEnd();
console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
    const isMarried = ({ married }) => married === true;
    const marriedPeople = people.filter(isMarried);
    console.log('Initial people array:');
    console.table(people);
    console.log('Married people:');
    console.table(marriedPeople);
}
console.groupEnd();
console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
    const maleDriver = ({ hasCar, sex }) => hasCar === true && sex === 'male';
    const femaleDriver = ({ hasCar, sex }) => hasCar === true && sex === 'female';
    const maleDrivers = people.filter(maleDriver);
    const femaleDrivers = people.filter(femaleDriver);
    const driversBySex = {
        maleDrivers: maleDrivers.length,
        femaleDrivers: femaleDrivers.length,
    };
    console.table(people);
    console.log(`Total number of male drivers: ${driversBySex.maleDrivers}`);
    console.log(`Total number of female drivers: ${driversBySex.femaleDrivers}`);
}
console.groupEnd();
console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
    const incomeToSalary = ({ income, ...otherInfo }) => {
        const funcOutcome = { ...otherInfo };
        if (income)
            funcOutcome.salary = income;
        return funcOutcome;
    };
    const peopleWithSalary = people.map(incomeToSalary);
    console.log('Initial people array:');
    console.table(people);
    console.log('Income changed to salary:');
    console.table(peopleWithSalary);
}
console.groupEnd();
console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
    const noPersonalInfo = ({ name, surname, age, ...restInfo }) => restInfo;
    const secretPeople = people.map(noPersonalInfo);
    console.log('Initial people array:');
    console.table(people);
    console.log('Secret people array:');
    console.table(secretPeople);
}
console.groupEnd();
console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
    const toPersonFullName = ({ name, surname, ...additionalInfo }) => ({ fullname: `${name} ${surname}`, ...additionalInfo });
    const peopleFullName = people.map(toPersonFullName);
    console.log('Initial people array:');
    console.table(people);
    console.log('Peeople array with property _fullname_:');
    console.table(peopleFullName);
}
console.groupEnd();
//# sourceMappingURL=main.js.map