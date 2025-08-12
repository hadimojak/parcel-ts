import { faker } from "@faker-js/faker";

export class User {
  private name: string;
  private location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: +faker.location.latitude(),
      lng: +faker.location.longitude(),
    };
  }

  public get getProperties(): { name: string; loc: { lat: number; lng: number } } {
    return { name: this.name, loc: this.location };
  }
}
