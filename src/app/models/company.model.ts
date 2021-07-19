import { MetricModel } from './metric.model';
export class CompanyModel {
  name!: string;
  metrics: MetricModel[] = [];
  readonly totalMetricsNeedAttention: number;

  constructor(props: Omit<CompanyModel, 'totalMetricsNeedAttention'>) {
    Object.assign(this, props);
    this.totalMetricsNeedAttention = props.metrics.filter(
      (metric) => metric.needsAttention
    ).length;
  }
}
