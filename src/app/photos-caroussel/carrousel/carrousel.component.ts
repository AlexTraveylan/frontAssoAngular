import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { imageCaroussel } from 'src/app/core/models/imageCarrousel.model';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
})
export class CarrouselComponent implements OnInit, OnDestroy {
  @Input() images!: imageCaroussel[];

  currentIndex: number = 0;
  interval!: NodeJS.Timer;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.next(1);
    }, 10000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  next(dir: 1 | -1): void {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.next(1);
    }, 10000);
    let realDir: number;
    if (dir == -1) {
      realDir = this.images.length - 1;
    } else {
      realDir = 1;
    }
    this.currentIndex = (this.currentIndex + realDir) % this.images.length;
  }

  redirect(imageUrl: string) {
    console.log(imageUrl.startsWith('http'));
    if (imageUrl.startsWith('http')) {
      console.log('in match');
      window.open(imageUrl, '_blank');
    } else {
      console.log('go router');
      this.router.navigate([imageUrl]);
    }
  }
}
