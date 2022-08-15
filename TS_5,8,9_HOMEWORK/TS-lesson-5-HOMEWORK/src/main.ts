/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
type Person = {
  readonly name: string,
  readonly surname: string,
  readonly sex: 'male' | 'female',
  age: number,
  income?: number,
  married?: boolean,
  hasCar?: boolean,
};

const people: Person[] = [
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

/*
  Šių užduočių tikslas ne tik išspręsti užduotis, bet išmokti kurti tipus pagal jau esančius tipus
  Pirmos 2 užduotys pateikiamos kaip pavyzdžiai kaip turėtų būt sprendžiami uždaviniai:
    * Aprašome tipus
    * Aprašome funkcijas
    * (jeigu reikia aprašome naujus kintamuosius reikalingus sprendimui)
    * Atliekame užduoties sprendimą
    * Spausdiname sprendimo rezultatus

  Visas funkcijas ir kintamuosius reikia aprašyti tipais (net jei to ir nereikalauja TS compiler'is)

*/
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
  // Tipai:
  type Identity = {
    name: Person['name'],
    surname: Person['surname'],
  };

  // Funkcijos:
  const personToIdentity = ({ name, surname }: Person): Identity => ({ name, surname });

  // Sprendimas:
  const identities: Identity[] = people.map(personToIdentity);

  // Spausdinimas:
  console.table(people);
  console.table(identities);
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
  // type TaskProps = {
  //   married: NonNullable<Person["married"]>,
  //   hasCar: NonNullable<Person["hasCar"]>,
  // }

  type TaskProps = Pick<Required<Person>, 'hasCar' | 'married'>;

  const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
    married: Boolean(married),
    hasCar: Boolean(hasCar),
  });

  const result: TaskProps[] = people.map(selectTaskProps);

  console.table(people);
  console.table(result);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
type NameSurnameMarried = {
  name: Person['name'],
  surname: Person['surname'],
  married: Person['married'],
};

const nameSurnameMarried = ({ name, surname, married }: Person):NameSurnameMarried => ({
  name, surname, married,
});

const taskThreeResult: NameSurnameMarried[] = people.map(nameSurnameMarried);

console.log('Initial people array:');
console.table(people);
console.log('People and their married status:');
console.table(taskThreeResult);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
type SexIncome = {
  sex : Person['sex'],
  income: Person['income']
};
const sexIncome = ({ sex, income }:Person): SexIncome => ({ sex, income });
const taskFourResult = people.map(sexIncome) as SexIncome[];
console.log('Initial people array:');
console.table(people);
console.log('Income by sex:');
console.table(taskFourResult);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
type NameSurnameSex = {
  name: Person['name'],
  surname: Person['surname'],
  sex: Person['sex'],
};
const nameSurnameSex = ({ name, surname, sex }:Person): NameSurnameSex => ({ name, surname, sex });
const taskFiveResult = people.map(nameSurnameSex) as NameSurnameSex[];
console.log('Initial people array:');
console.table(people);
console.log('People by sex:');
console.table(taskFiveResult);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  const maleArr: Person[] = [];
  const menFilter = ({ sex }:Person): boolean => sex === 'male';
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
type FemaleType = Omit<Person, 'sex'> & {
  sex: 'female',
};
const femaleFilter = ({ sex }: Person): boolean => sex === 'female';
const femaleArr: FemaleType[] = people.filter(femaleFilter) as FemaleType[];
console.log('Initial people array:');
console.table(people);
console.log('All female data:');
console.table(femaleArr);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
type HasCar = {
  name: Person['name'];
  surname: Person['surname'];
};
const hasCarFilter = ({ hasCar }: Person): boolean => hasCar === true;
const personWithCarArr : Person[] = people.filter(hasCarFilter) as Person[];
const nameSurnamECar = ({ name, surname }: Person): HasCar => ({ name, surname });
const hasCarArr: HasCar[] = personWithCarArr.map(nameSurnamECar);
console.log('Initial people array:');
console.table(people);
console.log('People with a driving lisece:');
console.table(hasCarArr);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  const isMarried = ({ married }: Person): boolean => married === true;
  const marriedPeople: Person[] = people.filter(isMarried) as Person [];
  console.log('Initial people array:');
  console.table(people);
  console.log('Married people:');
  console.table(marriedPeople);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  const maleDriver = ({ hasCar, sex }: Person): boolean => hasCar === true && sex === 'male';
  const femaleDriver = ({ hasCar, sex }: Person): boolean => hasCar === true && sex === 'female';
  const maleDrivers: Person[] = people.filter(maleDriver) as Person [];
  const femaleDrivers: Person[] = people.filter(femaleDriver) as Person[];
  type DriversBySex = {
    maleDrivers: number,
    femaleDrivers: number,
  };
  const driversBySex: DriversBySex = {
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
type PersonWithSalary = Omit<Person, 'income'> & { salary?: number };
const incomeToSalary = ({ income, ...otherInfo }: Person): PersonWithSalary => {
  const funcOutcome: PersonWithSalary = { ...otherInfo };
  if (income) funcOutcome.salary = income;
  return funcOutcome;
};
const peopleWithSalary: PersonWithSalary[] = people.map(incomeToSalary);

console.log('Initial people array:');
console.table(people);
console.log('Income changed to salary:');
console.table(peopleWithSalary);
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
type PersonNotIdentified = Omit<Person, 'name' | 'surname' | 'age'>;
const noPersonalInfo = ({
  name, surname, age, ...restInfo
}:Person):PersonNotIdentified => restInfo;
const secretPeople: PersonNotIdentified[] = people.map(noPersonalInfo);

console.log('Initial people array:');
console.table(people);
console.log('Secret people array:');
console.table(secretPeople);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  type PersonFullName = Omit<Person, 'name' | 'surname'> & { fullname: string };

  const toPersonFullName = ({ name, surname, ...additionalInfo }:Person): PersonFullName => ({ fullname: `${name} ${surname}`, ...additionalInfo });
  const peopleFullName: PersonFullName [] = people.map(toPersonFullName);

  console.log('Initial people array:');
  console.table(people);
  console.log('Peeople array with property _fullname_:');
  console.table(peopleFullName);
}
console.groupEnd();
