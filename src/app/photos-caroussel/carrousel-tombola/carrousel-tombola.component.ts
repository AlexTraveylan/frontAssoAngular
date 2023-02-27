import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { imageCaroussel } from 'src/app/core/models/imageCarrousel.model';

@Component({
  selector: 'app-carrousel-tombola',
  templateUrl: './carrousel-tombola.component.html',
  styleUrls: ['./carrousel-tombola.component.scss'],
})
export class CarrouselTombolaComponent {
  images: imageCaroussel[] = [
    {
      id: 0,
      imageUrl: 'assets/img/Tombola_2022/tombola1.jpg',
      titleContent: 'Photographe :',
      textContent: 'Vincent MACHER',
      linkUrl: 'https://www.vincentmacher.com/',
    },
    {
      id: 1,
      imageUrl: 'assets/img/Tombola_2022/tombola2.jpg',
    },
    {
      id: 2,
      imageUrl: 'assets/img/Tombola_2022/tombola3.jpg',
    },
    {
      id: 3,
      imageUrl: 'assets/img/Tombola_2022/tombola4.jpg',
    },
  ];

  constructor(private router: Router) {}

  goBackToEventList() {
    this.router.navigate(['eventend']);
  }
}
