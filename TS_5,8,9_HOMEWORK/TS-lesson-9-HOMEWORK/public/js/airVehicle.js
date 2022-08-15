import Vehicle from './vehicle.js';
class AirVehicle extends Vehicle {
    constructor(maxAltitude, vehicleSpecs) {
        super(vehicleSpecs);
        this.maxAltitude = maxAltitude;
    }
    toString() {
        return `${this.getString()} \n Max altitude: ${this.maxAltitude}`;
    }
}
export default AirVehicle;
//# sourceMappingURL=airVehicle.js.map