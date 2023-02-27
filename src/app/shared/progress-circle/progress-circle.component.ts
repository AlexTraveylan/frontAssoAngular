import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss'],
})
export class ProgressCircleComponent implements OnChanges {
  @Input() value!: string;
  MAX_VALUE: number = 440;
  style!: string;

  ngOnChanges(): void {
    this.style = `stroke-dashoffset: ${
      this.MAX_VALUE - (parseInt(this.value) * this.MAX_VALUE) / 100
    };`;
  }
}
