import { RegionModel } from '../../models/region.model';
import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: 'bar-chart.component.html',
  styleUrls: ['bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  @Input() regions!: RegionModel[];
  regionsForBarChart: RegionModel[] = [];

  private svg!: any;
  private margin = 60;
  private width = 250 - this.margin * 2;
  private height = 400 - this.margin * 2;

  ngOnInit() {
    this.setRegionsForBarChat();
    this.createSvg();
    this.drawBars(this.regionsForBarChart);
  }

  private setRegionsForBarChat() {
    // Remove not needing attention localities
    this.regionsForBarChart = this.regions.filter(
      (r) => r.totalOfLocalitiesNeedingAttention > 0
    );

    // sort array by total of needing attention localities
    this.regionsForBarChart.sort(
      (a, b) =>
        b.totalOfLocalitiesNeedingAttention -
        a.totalOfLocalitiesNeedingAttention
    );
  }

  private createSvg(): void {
    this.svg = d3
      .select('figure#bar')
      .append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .attr('class', 'bar-chart-svg')
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3
      .scaleBand()
      .range([0, this.width])
      .domain(data.map((d) => d.name))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg
      .append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,10)rotate(-90)')
      .style('text-anchor', 'end');

    // Create the Y-axis band scale
    const y = d3
      .scaleLinear()
      .domain([
        0,
        Math.max.apply(
          Math,
          this.regionsForBarChart.map(function (r) {
            return r.totalOfLocalitiesNeedingAttention;
          })
        ),
      ])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append('g').call(d3.axisLeft(y));
    // Create and fill the bars
    this.svg
      .selectAll('bars')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d: any) => x(d.name))
      .attr('y', (d: any) => y(d.totalOfLocalitiesNeedingAttention))
      .attr('width', x.bandwidth())
      .attr(
        'height',
        (d: any) => this.height - y(d.totalOfLocalitiesNeedingAttention)
      )
      .attr('fill', '#d04a35');
  }
}
