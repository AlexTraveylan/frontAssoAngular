import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { imageCaroussel } from 'src/app/core/models/imageCarrousel.model';

@Component({
  selector: 'app-carrousel-gouter',
  templateUrl: './carrousel-gouter.component.html',
  styleUrls: ['./carrousel-gouter.component.scss'],
})
export class CarrouselGouterComponent {
  images: imageCaroussel[] = [
    {
      id: 0,
      imageUrl: 'assets/img/gouterparticipatif/affiche.jpg',
    },
    {
      id: 1,
      imageUrl: 'assets/img/gouterparticipatif/gouter1.jpg',
    },
    {
      id: 2,
      imageUrl: 'assets/img/gouterparticipatif/gouter2.jpg',
    },
    {
      id: 3,
      imageUrl: 'assets/img/gouterparticipatif/gouter3.jpg',
    },
  ];

  constructor(private router: Router) {}

  goBackToEventList() {
    this.router.navigate(['eventend']);
  }
}
