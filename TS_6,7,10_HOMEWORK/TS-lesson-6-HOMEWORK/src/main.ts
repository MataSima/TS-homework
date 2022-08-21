/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-return-assign */
/* eslint-disable no-lone-blocks */
type PrimitiveType = string | number | boolean;

/*
  Šių pratybų tikslas su išspręsti užduotis panaudojant bendrinius tipus. [1-6]
  Funkcijų parametrai turi būti bendrinio tipo/ų, pagal kurios būtų suformuojami atsakymai

  7 užduotis, skirta savarankiškai išmokti patikrinti tipus:
  https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
*/

const numbArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const stringArray: string[] = ['Vienas', 'Du', 'Trys', 'Keturi', 'Penki'];

console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  const arrayFirstElement = <T>(array: T[]):T => array[0];
  const result1 = arrayFirstElement(numbArray);
  const result2 = arrayFirstElement(stringArray);
  console.log('Skaičių masyvo pirmas elementas:\n', result1);
  console.log('Stringų masyvo pirmas elementas:\n', result2);
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  const arrayFirstElement = <T>(array: T[]):T => array[array.length - 1];
  const result1 = arrayFirstElement(numbArray);
  const result2 = arrayFirstElement(stringArray);
  console.log('Skaičių masyvo paskutinis elementas:\n', result1);
  console.log('Stringų masyvo paskutinis elementas:\n', result2);
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
  const copyArray = <T extends PrimitiveType>(array:T[]): T[] => {
    const arrayCopy = array.map((x) => x);
    return arrayCopy;
  };
  const result1 = copyArray(numbArray);
  const result2 = copyArray(stringArray);
  console.log('Skaičių masyvo kopija:\n', result1);
  console.log('Stringų masyvo kopija:\n', result2);
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
  const cloneFunc = <T extends PrimitiveType>(element:T, times: number): T[] => {
    const resutlArr:T[] = [];
    for (let i = 0; i < times; i += 1) {
      resutlArr.push(element);
    }
    return resutlArr;
  };
  const example1 = cloneFunc(1, 5);
  const example2 = cloneFunc('Labas', 4);
  const example3 = cloneFunc(true, 10);
  console.log('Skaičius 1 įdėtas į masyvą 5 kartus:\n', example1);
  console.log('Stringas "Labas" įdėtas į masyvą 5 kartus:\n', example2);
  console.log('Bolean reikšmė įdėta į masyvą 10 kartų:\n', example3);
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
  const joinArrays = <T>(array1: T[], array2: T[]):T[] => [...array1, ...array2];
  const numbersArr1: number[] = [1, 3, 5, 7, 9];
  const numbersArr2: number[] = [2, 4, 6, 8, 10];
  const stringArr1: string[] = ['Labas', 'rytas', '!'];
  const stringArr2: string[] = ['Štai', 'ir', 'aš', '!'];
  const result1 = joinArrays(numbersArr1, numbersArr2);
  const result2 = joinArrays(stringArr1, stringArr2);
  console.log(`Masyvų [${numbersArr1}] ir [${numbersArr2}] sąjunga: \n`, result1);
  console.log(`Masyvų [${stringArr1}] ir [${stringArr2}] sąjunga: \n`, result2);
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
type SetGetValueObject <T> = {
  setValue: (setValue: T) => void,
  getValue: () => T
};

const setGetValue = <T>(initialValue: T):SetGetValueObject<T> => {
  let value: T = initialValue;

  return {
    setValue: (setValue) => value = setValue,
    getValue: () => value,
  };
};
const result1 = setGetValue(1);
const result2 = setGetValue([1, 2, 3, 4, 5]);
const result3 = setGetValue({ name: 'Labinas', surname: 'Vakarinskas' });

console.log('Original values', {
  GetResult1: result1.getValue(),
  GetResult2: result2.getValue(),
  GetResult3: result3.getValue(),
});
console.log('Changed values', {
  GetResult1: result1.setValue(11),
  GetResult2: result2.setValue([6, 7, 8]),
  GetResult3: result3.setValue({ name: 'Visogerė', surname: 'Vakarienė' }),
});
}
console.groupEnd();

console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`);
// Oficialus būdas patikrinti tipą
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
{
  type Person = {
    name: string,
    surname: string,
  };

  type Student = Person & {
    university: string,
    course: number,
  };

  type Worker = Person & {
    avgMonthlyPay: number,
  };
  type GroupType = {
    people: Person[],
    students: Student[],
    workers: Worker[],
  };

  const peopleArr: (Person | Student | Worker)[] = [
    {
      name: 'Atstovė', surname: 'Galtokaitė', university: 'VU', course: 2,
    },
    { name: 'Kurpius', surname: 'Medainis' },
    { name: 'Varnas', surname: 'Akilaitis', avgMonthlyPay: 2000 },
    { name: 'Ferodijus', surname: 'Cilcius' },
    { name: 'Sobora', surname: 'Kupolaityė', avgMonthlyPay: 1000 },
    {
      name: 'Zubrius', surname: 'Sulindauskas', university: 'VU', course: 2,
    },
    { name: 'Šidelė', surname: 'Gyslovienė', avgMonthlyPay: 1500 },
    {
      name: 'Užuodauskas', surname: 'Perrašimauskas', university: 'VGTU', course: 1,
    },
  ];
  const isWorker = (person:Person):person is Worker => (person as Worker).avgMonthlyPay !== undefined;

  const isStudent = (person: Person): person is Student => (person as Student).university !== undefined && (person as Student) !== undefined;

  const groupPeople = (people: Person[]): GroupType => {
    const groupedPeople = people.reduce<GroupType>((prevGroupedPeople, person) => {
      const newGroupedPeople = { ...prevGroupedPeople };
      if (isWorker(person)) newGroupedPeople.workers.push(person);
      if (isStudent(person)) newGroupedPeople.students.push(person);
      else newGroupedPeople.people.push(person);
      return newGroupedPeople;
    }, {
      people: [],
      students: [],
      workers: [],
    });
    return groupedPeople;
  };

  console.log(groupPeople(peopleArr));
}
