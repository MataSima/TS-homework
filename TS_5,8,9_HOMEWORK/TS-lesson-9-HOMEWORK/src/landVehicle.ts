import Vehicle, { VehicleSpecs } from './vehicle.js';

class LandVehicle extends Vehicle {
  private tires!: string[];

  constructor(tires: string[], vehicleSpecs: VehicleSpecs) {
    super(vehicleSpecs);
    this.tires = tires;
  }

  public override toString():string {
    return `${this.getString()} \n Tires options: ${this.tires.join(', ')}`;
  }
}

export default LandVehicle;
