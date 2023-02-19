import { faker } from '@faker-js/faker';
import { MapItem } from './CustomMap';

class Company implements MapItem {
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

  markerContent(): string {
    return `<div><h1>Company: ${this.name}</h1>
    <h3>${this.catchPhrase}</h3></div>
    `;
  }
}

export default Company;
