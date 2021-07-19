export class MetricModel {
  name!: string;
  currentValue!: number;
  referenceValue!: number;
  /**
   *  if true the current value must be higher than the reference value
   *  if false the current value must be lower than the reference value
   */
  valueMustBeHigher!: boolean;
  readonly needsAttention: boolean;

  constructor(props: Omit<MetricModel, 'needsAttention'>) {
    Object.assign(this, props);

    this.needsAttention = props.valueMustBeHigher
      ? props.currentValue < props.referenceValue
      : props.currentValue > props.referenceValue;
  }
}
