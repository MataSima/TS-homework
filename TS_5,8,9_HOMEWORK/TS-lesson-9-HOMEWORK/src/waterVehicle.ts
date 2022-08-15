import Vehicle, { VehicleSpecs } from './vehicle.js';

class WaterVehicle extends Vehicle {
  private maxDepth!: number;

  constructor(maxDepth: number, vehicleSpecs: VehicleSpecs) {
    super(vehicleSpecs);

    this.maxDepth = maxDepth;
  }

  public override toString():string {
    return `${this.getString()} \n Max depth: ${this.maxDepth}`;
  }
}

export default WaterVehicle;
