import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ng2-tooltip-directive';
import { RegionCardComponent } from './region-card/region-card.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  imports: [CommonModule, FormsModule, TooltipModule],
  declarations: [RegionCardComponent, BarChartComponent],
  exports: [RegionCardComponent, BarChartComponent],
})
export class ComponentsModule {}
