import { Component } from '@angular/core';

@Component({
  selector: 'app-carrousel-accueil',
  templateUrl: './carrousel-accueil.component.html',
  styleUrls: ['./carrousel-accueil.component.scss'],
})
export class CarrouselAccueilComponent {
  images: string[] = [
    'assets/img/accueil/ecole1.jpeg',
    'assets/img/accueil/ecole2.jpeg',
    'assets/img/accueil/ecole3.jpg',
    'assets/img/accueil/ecole4.jpg',
  ];
}
