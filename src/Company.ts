import { faker } from '@faker-js/faker';

class Company {
  public name: string;
  public catchPhrase: string;
  public location: { lat: number; long: number };

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      // faker return string type for lat & long
      // we want number type
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude()),
    };
  }
}

export default Company;
