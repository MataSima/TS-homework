"use strict";
var HeightUnits;
(function (HeightUnits) {
    HeightUnits["CENTIMETRES"] = "cm";
    HeightUnits["METRES"] = "m";
    HeightUnits["INCHES"] = "in";
})(HeightUnits || (HeightUnits = {}));
var WeightUnits;
(function (WeightUnits) {
    WeightUnits["KILOGRAMS"] = "kg";
    WeightUnits["POUNDS"] = "lbs";
})(WeightUnits || (WeightUnits = {}));
class Person {
    constructor(name, surname, age, height, weight, heightUnits, weightUnits) {
        this.setName(name);
        this.setSurname(surname);
        this.setAge(age);
        this.setHeight(height, heightUnits);
        this.setWeight(weight, weightUnits);
    }
    setName(name) {
        this.name = name;
    }
    setSurname(surname) {
        this.surname = surname;
    }
    setAge(age) {
        if (age % 1 !== 0)
            throw new Error('Amžius privalo būti sveikasis skaičius');
        if (age < 1)
            throw new Error('Esate per jaunas arba dar negimęs');
        if (age > 150)
            throw new Error('Esate per senas arba jau miręs');
        this.age = age;
    }
    setHeight(height, heightUnits = HeightUnits.CENTIMETRES) {
        switch (heightUnits) {
            case HeightUnits.CENTIMETRES:
                this.height = height;
                break;
            case HeightUnits.METRES:
                this.height = height * 100;
                break;
            case HeightUnits.INCHES:
                this.height = height * 2.54;
                break;
            default: break;
        }
    }
    setWeight(weight, weightUnits = WeightUnits.KILOGRAMS) {
        switch (weightUnits) {
            case WeightUnits.KILOGRAMS:
                this.weight = weight;
                break;
            case WeightUnits.POUNDS:
                this.weight = weight * 0.45;
                break;
            default: break;
        }
    }
    getFullName() {
        return `${this.name} ${this.surname}`;
    }
    getHeight() {
        switch (Person.heightUnits) {
            case HeightUnits.CENTIMETRES: return this.height + Person.heightUnits;
            case HeightUnits.METRES: return this.height / 100 + Person.heightUnits;
            case HeightUnits.INCHES: return this.height / 2.54 + Person.heightUnits;
            default: return this.height + Person.heightUnits;
        }
    }
    getWeight() {
        switch (Person.weightUnits) {
            case WeightUnits.KILOGRAMS: return this.weight;
            case WeightUnits.POUNDS: return this.weight / 0.45;
            default: return this.weight;
        }
    }
    getFullInfo() {
        return `${this.name} ${this.surname}:\n
    \tAge: ${this.age}\n
    \tHeight: ${this.height} ${Person.heightUnits}\n
    \tWeight:${this.weight} ${Person.weightUnits}`;
    }
}
Person.heightUnits = HeightUnits.CENTIMETRES;
Person.weightUnits = WeightUnits.KILOGRAMS;
const randomStrangerOne = new Person('Kilimantas', 'Praspaliauskis', 26, 170, 70);
const randomStrangerTwo = new Person('Audra', 'Galvonaitė', 45, 162, 74);
console.groupCollapsed('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai iš jų sukurkite setterius, ir bendrą getterį fullname');
{
    console.log('Random person one: \n', randomStrangerOne.getFullName());
    console.log('Random person two: \n', randomStrangerTwo.getFullName());
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite Person klasei savybę "age". Inkapsuliuokite šią savybę taip, jog reikšmė galėtų būti tik sveiki skaičiai nuo 1 iki 150');
{
    console.log('Random person one age is set in minus value:');
    try {
        randomStrangerOne.setAge(-1);
    }
    catch (error) {
        console.error(error.message);
    }
    console.log('Random person teo age is set in unrealistic value:');
    try {
        randomStrangerTwo.setAge(151);
    }
    catch (error) {
        console.error(error.message);
    }
}
console.groupEnd();
console.groupCollapsed('3. Sukurkite Person klasei savybę "height" kurios vertė būtų saugoma centimetrais. Sukurkite šiai savybei setterį, kuris pirmu parametru priimtų reikšmę, o antru parametru priimtų matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras nėra perduotas, numatytas(default) matavimo vienetas turi būti cm. Getteris turi grąžinti reikšmę centimetrais.');
{
    console.log('Random person one height: \n', randomStrangerOne.getHeight());
    console.log('Random person two height: \n', randomStrangerTwo.getHeight());
}
console.groupEnd();
console.groupCollapsed('4. Sukurkite Person klasei statinę savybę "heightUnits". Jos tipas turi būti išvardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reikšmė turi būti centimetrai');
{
    console.log('Random person one height: \n', randomStrangerOne.getHeight(), Person.heightUnits);
    console.log('Random person two height: \n', randomStrangerTwo.getHeight(), Person.heightUnits);
}
console.groupEnd();
console.groupCollapsed('5. "height" setterio antram parametrui pakeiskite sąjungos tipą į [4.] užduotyje sukurtą išvardinimą(enum). Priderinkite pavyzdžius ir metodą.');
{
    randomStrangerOne.setHeight(1.7, HeightUnits.METRES);
    console.log('Random person one height: \n', randomStrangerOne.getHeight(), Person.heightUnits);
    randomStrangerTwo.setHeight(68, HeightUnits.INCHES);
    console.log('Random person two height: \n', randomStrangerTwo.getHeight(), Person.heightUnits);
}
console.groupEnd();
console.groupCollapsed('6. "height" geteriui sukurkite logiką, jog jis grąžintų matavimo vienetus, pagal statinės savybės "heightUnits" reikšmę.');
{
    console.log('Random person one height: \n', randomStrangerOne.getHeight());
    console.log('Random person two height: \n', randomStrangerTwo.getHeight());
}
console.groupEnd();
console.groupCollapsed('7. Analogiškai pagal [4.]-[6.] punktus sukurkite savybę weight su statiniu išvardinimu "weightUnits", kurio pasirinkimai turi būti: "KG", "LBS"');
{
    randomStrangerOne.setWeight(120, WeightUnits.POUNDS);
    console.log('Random person one weight: \n', randomStrangerOne.getWeight(), Person.weightUnits);
    randomStrangerTwo.setWeight(150, WeightUnits.POUNDS);
    console.log('Random person two weight: \n', randomStrangerTwo.getWeight(), Person.weightUnits);
}
console.groupEnd();
console.group('8. Sukurkite klasei Person metodą "toString". Kuris paverstų žmogaus savybes gražiu formatu: vardas ir pavardė pirmoje eilutėje, o "height" ir "weight" savybės atskirose eilutėse, atitrauktos nuo kairio krašto per "tab" simbolį, ir su matavimo vienetais(kurie išsaugoti) statinėse Person klasės savybėse');
console.log('Random person one full info: \n', randomStrangerOne.getFullInfo());
console.log('Random person two full info: \n', randomStrangerTwo.getFullInfo());
//# sourceMappingURL=main.js.map