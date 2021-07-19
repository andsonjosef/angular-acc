import { RegionModel } from './../../models/region.model';
import { Component, OnInit } from '@angular/core';
import { regionsConst } from 'src/app/constants/regions.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  regions: RegionModel[] = regionsConst;
  children: any;
  textContent: any;
  data: any = {};
  lastUpdate = new Date();

  ngOnInit(): void {
    for (const region of this.regions) {
      region.localities.sort(
        (a, b) =>
          b.totalOfCompaniesNeedAttention - a.totalOfCompaniesNeedAttention
      );
    }
  }
}
