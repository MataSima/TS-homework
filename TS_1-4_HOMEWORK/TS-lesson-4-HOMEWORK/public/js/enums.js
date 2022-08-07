"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
})(WeekDays || (WeekDays = {}));
var Answer;
(function (Answer) {
    Answer[Answer["No"] = 0] = "No";
    Answer[Answer["Yes"] = 1] = "Yes";
})(Answer || (Answer = {}));
var WeekDayNamesLT;
(function (WeekDayNamesLT) {
    WeekDayNamesLT["Monday"] = "pirmadienis";
    WeekDayNamesLT["Tuesday"] = "antradienis";
    WeekDayNamesLT["Wednesday"] = "tre\u010Diadienis";
    WeekDayNamesLT["Thursday"] = "ketvirtadienis";
    WeekDayNamesLT["Friday"] = "penktadienis";
    WeekDayNamesLT["Saturday"] = "\u0161e\u0161tadienis";
    WeekDayNamesLT["Sunday"] = "sekmadienis";
})(WeekDayNamesLT || (WeekDayNamesLT = {}));
console.group('Literal types - užduotys');
{
    let TopLithuaniaCities;
    (function (TopLithuaniaCities) {
        TopLithuaniaCities["Vilnius"] = "Vilnius";
        TopLithuaniaCities["Kaunas"] = "Kaunas";
        TopLithuaniaCities["Klaipeda"] = "Klaip\u0117da";
        TopLithuaniaCities["Siauliai"] = "\u0160iauliai";
        TopLithuaniaCities["Panevezys"] = "Panev\u0117\u017Eys";
    })(TopLithuaniaCities || (TopLithuaniaCities = {}));
    let TopPopulatedCountries;
    (function (TopPopulatedCountries) {
        TopPopulatedCountries[TopPopulatedCountries["China"] = 1] = "China";
        TopPopulatedCountries[TopPopulatedCountries["India"] = 2] = "India";
        TopPopulatedCountries[TopPopulatedCountries["UnitedStates"] = 3] = "UnitedStates";
        TopPopulatedCountries[TopPopulatedCountries["Indonesia"] = 4] = "Indonesia";
        TopPopulatedCountries[TopPopulatedCountries["Pakistan"] = 5] = "Pakistan";
    })(TopPopulatedCountries || (TopPopulatedCountries = {}));
    let TopBvpCountries;
    (function (TopBvpCountries) {
        TopBvpCountries[TopBvpCountries["UnitedStates"] = 1] = "UnitedStates";
        TopBvpCountries[TopBvpCountries["Cina"] = 2] = "Cina";
        TopBvpCountries[TopBvpCountries["Japan"] = 3] = "Japan";
        TopBvpCountries[TopBvpCountries["Germany"] = 4] = "Germany";
        TopBvpCountries[TopBvpCountries["UnitedKingdom"] = 5] = "UnitedKingdom";
    })(TopBvpCountries || (TopBvpCountries = {}));
    console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
    {
        const cityOne = TopLithuaniaCities.Kaunas;
        const cityTwo = TopLithuaniaCities.Siauliai;
        console.log(cityOne);
        console.log(cityTwo);
    }
    console.groupEnd();
    console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
    {
        const countryPopOne = TopPopulatedCountries.UnitedStates;
        const countryPopTwo = TopPopulatedCountries.Pakistan;
        console.log(countryPopOne);
        console.log(countryPopTwo);
    }
    console.groupEnd();
    console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
    {
        const countryBvpOne = TopBvpCountries.UnitedStates;
        const countryBvpTwo = TopBvpCountries.UnitedKingdom;
        console.log(countryBvpOne);
        console.log(countryBvpTwo);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=enums.js.map