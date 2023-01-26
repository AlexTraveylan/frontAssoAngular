import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
})
export class CarrouselComponent implements OnInit, OnDestroy {
  @Input() images!: string[];

  currentIndex: number = 0;
  interval: any;
  direction: string = 'right';

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.next();
    }, 10000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
