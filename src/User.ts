import { faker } from '@faker-js/faker';
import { MapItem } from './CustomMap';

class User implements MapItem {
  public name: string;
  public location: { lat: number; long: number };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      // faker return string type for lat & long
      // we want number type
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User: ${this.name}`;
  }
}

export default User;
