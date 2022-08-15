import AirVehicle from './airVehicle.js';
import WaterVehicle from './waterVehicle.js';
import LandVehicle from './landVehicle.js';
const mixedVehicles = [
    new AirVehicle(7000, { brand: 'Airbus', model: 'A321', year: 1994 }),
    new AirVehicle(9000, { brand: 'Boeing', model: '737', year: 1996 }),
    new WaterVehicle(40, { brand: 'Beneteau', model: 'First 53F5', year: 1990 }),
    new WaterVehicle(50, { brand: 'Beneteau', model: 'Oceanis 58', year: 2009 }),
    new LandVehicle(['Bridgestone', 'GoodYear', 'Michelin'], { brand: 'Land Rover', model: 'Discovery Series 1', year: 1989 }),
    new LandVehicle(['Hankook', 'Sailun', 'Michelin'], { brand: 'Toyota', model: 'Land Cruiser', year: 2005 }),
];
mixedVehicles.map((v) => console.log(v.toString()));
//# sourceMappingURL=main.js.map