import Brand from "../types/brand";
import Car from "../types/car";
import Model from "../types/model";
import CarJoined  from "../types/car-joined"



type CarsCollectionProps = {
    brands: Brand[];
    cars: Car[];
    models: Model[];
};

class CarsCollection {

private properties: CarsCollectionProps;
constructor (properties: CarsCollectionProps){
this.properties = properties;
}
private joinCar = ({model_id, ...car }: Car) => {
    const {brands, models} = this.properties;
    const carModel = models.find((model) => model.id
    === model_id);
    const carBrand = brands.find((brand)=> brand.id
    === carModel?.brand_id);
    
    return {
        ...car,
        brand: (carBrand && carBrand.title) ??
        'unknown',
        model: (carModel && carModel.title) ??
        'unknown',
    }
}
public get all(): CarJoined[] {
    return this.properties.cars.map(this.joinCar);
  }
}
export default CarsCollection;
