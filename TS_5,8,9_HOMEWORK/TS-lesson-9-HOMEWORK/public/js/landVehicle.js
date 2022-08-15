import Vehicle from './vehicle.js';
class LandVehicle extends Vehicle {
    constructor(tires, vehicleSpecs) {
        super(vehicleSpecs);
        this.tires = tires;
    }
    toString() {
        return `${this.getString()} \n Tires options: ${this.tires.join(', ')}`;
    }
}
export default LandVehicle;
//# sourceMappingURL=landVehicle.js.map