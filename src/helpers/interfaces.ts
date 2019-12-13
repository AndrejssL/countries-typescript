export interface Continent {
  name: string;
}

export interface Country {
  name: string;
  code: string;
  native: string;
  currency: string;
  phone: string;
  continent: Continent;
}

export interface Countries {
  countries: Country[];
}
