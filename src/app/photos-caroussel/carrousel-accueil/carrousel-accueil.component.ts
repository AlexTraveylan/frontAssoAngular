import { Component } from '@angular/core';
import { imageCaroussel } from 'src/app/core/models/imageCarrousel.model';

@Component({
  selector: 'app-carrousel-accueil',
  templateUrl: './carrousel-accueil.component.html',
  styleUrls: ['./carrousel-accueil.component.scss'],
})
export class CarrouselAccueilComponent {
  images: imageCaroussel[] = [
    {
      id: 0,
      imageUrl: 'assets/img/accueil/ecole1.jpeg',
      titleContent: 'A propos de Nous',
      textContent:
        "L'APE a pour but d'animer la communauté de parents et d'aider l'école de diverses manière.",
      linkUrl: 'about',
    },
    {
      id: 1,
      imageUrl: 'assets/img/accueil/ecole2.jpeg',
      titleContent: "Ce qu'on fait",
      textContent: 'Retrouvez les événements passés et les photos',
      linkUrl: 'eventend',
    },
    {
      id: 2,
      imageUrl: 'assets/img/accueil/ecole3.jpg',
      titleContent: 'Espace membre',
      textContent: 'Un espace simplifié pour organiser les futurs évennements',
      linkUrl: 'orga',
    },
    {
      id: 3,
      imageUrl: 'assets/img/accueil/ecole4.jpg',
      titleContent: 'Vie scolaire',
      textContent: "Retrouver sur ce site les résumé des conseils d'école.",
      linkUrl: 'conseils',
    },
  ];
}
