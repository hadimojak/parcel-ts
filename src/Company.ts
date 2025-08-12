import { faker } from "@faker-js/faker";

export class Company {
  private company: string;
  private catchPhrase: string;
  private location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.company = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  public get getAll(): any {
    return { name: this.company, pharase: this.catchPhrase, loc: this.location };
  }
}
