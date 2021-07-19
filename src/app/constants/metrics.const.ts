import { MetricModel } from '../models/metric.model';

export const positiveProfit = new MetricModel({
  name: 'Profit A',
  currentValue: 65,
  referenceValue: 50,
  valueMustBeHigher: true,
});

export const negativeProfit = new MetricModel({
  name: 'Profit B',
  currentValue: 40,
  referenceValue: 50,
  valueMustBeHigher: true,
});

export const positiveBrokenProducts = new MetricModel({
  name: 'Broken Products A',
  currentValue: 5,
  referenceValue: 20,
  valueMustBeHigher: false,
});

export const negativeBrokenProducts = new MetricModel({
  name: 'Broken Products B',
  currentValue: 22,
  referenceValue: 20,
  valueMustBeHigher: true,
});
