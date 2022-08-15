import Vehicle from './vehicle.js';
class WaterVehicle extends Vehicle {
    constructor(maxDepth, vehicleSpecs) {
        super(vehicleSpecs);
        this.maxDepth = maxDepth;
    }
    toString() {
        return `${this.getString()} \n Max depth: ${this.maxDepth}`;
    }
}
export default WaterVehicle;
//# sourceMappingURL=waterVehicle.js.map