import { CompanyModel } from './company.model';

export class LocalityModel {
  name!: string;
  companies: CompanyModel[] = [];
  readonly totalOfCompaniesNeedAttention: number;

  constructor(props: Omit<LocalityModel, 'totalOfCompaniesNeedAttention'>) {
    Object.assign(this, props);
    this.totalOfCompaniesNeedAttention = props.companies.filter(
      (company) => company.totalMetricsNeedAttention > 0
    ).length;
  }
}
