import {
  localityA,
  localityB,
  localityC,
  localityD,
  localityE,
} from './localities.const';
import { RegionModel } from './../models/region.model';

export const regionsConst: RegionModel[] = [
  new RegionModel({
    name: 'Region A',
    localities: [localityA, localityB, localityC, localityD],
  }),

  new RegionModel({
    name: 'Region B',
    localities: [
      localityA,
      localityB,
      localityC,
      localityD,
      localityA,
      localityB,
      localityC,
      localityD,
      localityA,
      localityB,
      localityC,
      localityD,
    ],
  }),

  new RegionModel({
    name: 'Region C',
    localities: [localityD],
  }),

  new RegionModel({
    name: 'Region D',
    localities: [
      localityA,
      localityB,
      localityC,
      localityD,
      localityA,
      localityB,
      localityC,
      localityD,
      localityA,
      localityB,
      localityC,
      localityD,
    ],
  }),

  new RegionModel({
    name: 'Region E',
    localities: [localityD, localityE],
  }),

  new RegionModel({
    name: 'Region F',
    localities: [localityA, localityB, localityC, localityD],
  }),

  new RegionModel({
    name: 'Region G',
    localities: [
      localityA,
      localityB,
      localityC,
      localityD,
      localityA,
      localityB,
      localityC,
      localityD,
      localityA,
      localityB,
      localityC,
      localityD,
    ],
  }),

  new RegionModel({
    name: 'Region H',
    localities: [localityD],
  }),

  new RegionModel({
    name: 'Region I',
    localities: [localityA, localityD],
  }),
];
