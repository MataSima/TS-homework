export type VehicleSpecs = {
  brand: string;
  model: string;
  year: number;
};

class Vehicle {
  protected brand!: string;

  protected model!: string;

  protected year!: number;

  constructor({ brand, model, year }: VehicleSpecs) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  protected getString(): string {
    const { brand, model, year } = this;
    return `${brand} ${model} ${year}`;
  }
}

export default Vehicle;
