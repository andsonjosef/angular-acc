import {
  positiveProfit,
  positiveBrokenProducts,
  negativeBrokenProducts,
  negativeProfit,
} from './metrics.const';
import { CompanyModel } from '../models/company.model';

export const companyA: CompanyModel = new CompanyModel({
  name: 'Company A',
  metrics: [positiveProfit, positiveBrokenProducts],
});

export const companyB: CompanyModel = new CompanyModel({
  name: 'Company B',
  metrics: [positiveProfit, positiveBrokenProducts],
});

export const companyC: CompanyModel = new CompanyModel({
  name: 'Company C',
  metrics: [negativeProfit, negativeBrokenProducts],
});

export const companyD: CompanyModel = new CompanyModel({
  name: 'Company D',
  metrics: [negativeProfit, positiveBrokenProducts],
});

export const companyE: CompanyModel = new CompanyModel({
  name: 'Company E',
  metrics: [positiveProfit],
});
