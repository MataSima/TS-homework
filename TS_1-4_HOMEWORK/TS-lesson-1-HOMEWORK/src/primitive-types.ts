/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

/*
TypeScript'e galioja tie patys primityvūs duomenų tipai kaip ir JavaScript'e:
  * string - simbolių darinys
  * number - skaičius
  * boolean - loginis kintamasis
  * null - tipas pasakantis, kad reikėmės/nuorodos nėra
  * undefined - neapibrėžtas tipas
  * symbol - skirtas unikalioms reikšmėms kurti - šio kurso metu jo nenagrinėsime
*/

// Kuriant kintamuosius, reikia šiuos tipus priskirti kintamiesiems:

console.group('1. Priskirkite kintamiesiems duomenų tipus');
{
  const title: string = 'Vermontas';
  const subTitle: string = 'Kavinė - Baras';
  const peopleCount: number = 5;
  const maxPeopleCount: number = 26;
  const isOpen: boolean = true;
  const opentTime: string = '12:00';
  const closeTime: string = '02:00';
  const security: null = null;

  console.log({
    title: [title, typeof title],
    subTitle: [subTitle, typeof subTitle],
    peopleCount: [peopleCount, typeof peopleCount],
    maxPeopleCount: [maxPeopleCount, typeof maxPeopleCount],
    isOpen: [isOpen, typeof isOpen],
    openTime: [opentTime, typeof opentTime],
    closeTime: [closeTime, typeof closeTime],
    security: [security, typeof security],
  });
}
console.groupEnd();
