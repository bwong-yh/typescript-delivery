import { faker } from '@faker-js/faker';

class User {
  constructor(
    public name: string,
    public location: { lat: number; long: number }
  ) {
    this.name = faker.name.firstName();
    this.location = {
      // faker return string type for lat & long
      // we want number type
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude()),
    };
  }
}
