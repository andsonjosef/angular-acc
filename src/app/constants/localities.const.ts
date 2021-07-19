import {
  companyA,
  companyB,
  companyC,
  companyD,
  companyE,
} from './companies.const';
import { LocalityModel } from './../models/locality.model';

export const localityA: LocalityModel = new LocalityModel({
  name: 'Locality A',
  companies: [companyA, companyB, companyC, companyD],
});

export const localityB: LocalityModel = new LocalityModel({
  name: 'Locality B',
  companies: [companyA, companyB, companyC],
});

export const localityC: LocalityModel = new LocalityModel({
  name: 'Locality C',
  companies: [companyA, companyB],
});

export const localityD: LocalityModel = new LocalityModel({
  name: 'Locality D',
  companies: [companyA],
});

export const localityE: LocalityModel = new LocalityModel({
  name: 'Locality E',
  companies: [companyA, companyE],
});
