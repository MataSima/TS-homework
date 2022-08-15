import Vehicle, { VehicleSpecs } from './vehicle.js';

class AirVehicle extends Vehicle {
  private maxAltitude!: number;

  constructor(maxAltitude: number, vehicleSpecs: VehicleSpecs) {
    super(vehicleSpecs);

    this.maxAltitude = maxAltitude;
  }

  public override toString():string {
    return `${this.getString()} \n Max altitude: ${this.maxAltitude}`;
  }
}

export default AirVehicle;
