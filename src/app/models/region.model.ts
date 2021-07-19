import { LocalityModel } from './locality.model';

export class RegionModel {
  name!: string;
  localities: LocalityModel[] = [];
  readonly totalOfLocalitiesNeedingAttention: number;

  constructor(props: Omit<RegionModel, 'totalOfLocalitiesNeedingAttention'>) {
    Object.assign(this, props);
    this.totalOfLocalitiesNeedingAttention = props.localities.filter(
      (locality) => locality.totalOfCompaniesNeedAttention > 0
    ).length;
  }
}
