import { Component } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { ReferenceLine, multi, optionOneReferenceLines } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  multi: any[];
  referenceLines: ReferenceLine[];
  view: [number, number] = [380, 300];
  label: string = 'Custom label';
  legendPosition = LegendPosition.Below;

  // options
  xAxisLabel: string = 'Year';
  yAxisLabel: string = '%';
  colorScheme: Color = {
    selectable: false,
    group: ScaleType.Linear,
    name: 'dark',
    domain: ['#004bcb', '#ff0000'],
  };

  constructor() {
    this.multi = multi;
    this.referenceLines = optionOneReferenceLines;
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
