import { LocalityModel } from './../../models/locality.model';
import { RegionModel } from './../../models/region.model';
import { Component, Input } from '@angular/core';
import { TooltipOptions } from 'ng2-tooltip-directive';

@Component({
  selector: 'app-region-card',
  templateUrl: 'region-card.component.html',
  styleUrls: ['region-card.component.scss'],
})
export class RegionCardComponent {
  @Input() region!: RegionModel;
  localityHovered?: LocalityModel;
  tooltipOptions: TooltipOptions = {
    showDelay: 500,
    theme: 'light',
    tooltipClass: 'tooltip-metrics',
    placement: 'right',
    width: '30vw',
    maxWidth: '30vw',
  };
}
