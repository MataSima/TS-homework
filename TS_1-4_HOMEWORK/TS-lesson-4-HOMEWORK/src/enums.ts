/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */
/*
  Enum(išvardinimas) - tai konstantų rinkinys.
  Enum(išvardinimai) yra naudojami įvardinti tipams ar nustatymams.
  Jų reikšmės dažniau naudojamos tipo patikrinimams, nei atvazdavimui.
*/

// Skaitiniai išvardinimai (numeric enums)
// Nurodžius pirmajai konstantai reikšmę, sekančios susinumeruoja pradedant nurodyta reikšme
enum WeekDays {
  Monday = 1,
  Tuesday, // 2
  Wednesday, // 3
  Thursday, // 4
  Friday, // 5
  Saturday, // 6
  Sunday, // 7
}

// Jei nenurodote pirmosios reikšmės, numeruojama nuo 0
enum Answer {
  No, // 0
  Yes, // 1
}

// Jei išvardinamų konstantų tipas yra ne skaičius, privalote įvardinti kiekvieną narį
enum WeekDayNamesLT {
  Monday = 'pirmadienis',
  Tuesday = 'antradienis',
  Wednesday = 'trečiadienis',
  Thursday = 'ketvirtadienis',
  Friday = 'penktadienis',
  Saturday = 'šeštadienis',
  Sunday = 'sekmadienis',
}

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
  // Enum pirmąjai užduočiai:
  //
  enum TopLithuaniaCities {
    Vilnius = 'Vilnius',
    Kaunas = 'Kaunas',
    Klaipeda = 'Klaipėda',
    Siauliai = 'Šiauliai',
    Panevezys = 'Panevėžys',
  }
  // Enum antrąjai užduočiai:
  //
  enum TopPopulatedCountries {
    China = 1,
    India,
    UnitedStates,
    Indonesia,
    Pakistan,
  }
  // Enum trečiąjai užduočiai:
  //
  enum TopBvpCountries {
    UnitedStates = 1,
    Cina,
    Japan,
    Germany,
    UnitedKingdom,
  }

  console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
  {
    const cityOne: TopLithuaniaCities = TopLithuaniaCities.Kaunas;
    const cityTwo: TopLithuaniaCities = TopLithuaniaCities.Siauliai;
    console.log(cityOne);
    console.log(cityTwo);
  }
  console.groupEnd();

  console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
  {
    const countryPopOne: TopPopulatedCountries = TopPopulatedCountries.UnitedStates;
    const countryPopTwo: TopPopulatedCountries = TopPopulatedCountries.Pakistan;
    console.log(countryPopOne);
    console.log(countryPopTwo);
  }
  console.groupEnd();

  console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
  {
    const countryBvpOne: TopBvpCountries = TopBvpCountries.UnitedStates;
    const countryBvpTwo: TopBvpCountries = TopBvpCountries.UnitedKingdom;
    console.log(countryBvpOne);
    console.log(countryBvpTwo);
  }
  console.groupEnd();
}
console.groupEnd();
