import { Component, OnInit } from '@angular/core';
import { Event } from '../../../../core/models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  events!: Event[];

  ngOnInit(): void {
    this.events = [
      {
        id: 8,
        day: 13,
        mouth: 'dec',
        year: 2022,
        title: "Fête de l'école, Tombola",
        description:
          'Tombola pour Noël, avec la collaboration des commerçants du quartier pour les lots',
      },

      {
        id: 7,
        day: 8,
        mouth: 'nov',
        year: 2022,
        title: 'Gouter participatif',
        description:
          "Organisation d'un gouter participatif pres du lac. Tous les parents conviés !",
        lien: 'https://www.parents-nelson-mandela.fr/gouter2022.php',
      },

      {
        id: 6,
        day: 2,
        mouth: 'sept',
        year: 2022,
        title: 'Rentrée 2022-2023',
        description: 'Bonne rentrée à tous',
      },

      {
        id: 5,
        day: 25,
        mouth: 'juin',
        year: 2022,
        title: 'Vide-jouet',
        description:
          "L'evennement s'est déroulé tranquillement dans l'enceinte de l'école.",
        lien: 'https://www.parents-nelson-mandela.fr/assets/fliyer.pdf',
      },

      {
        id: 4,
        day: 31,
        mouth: 'mai',
        year: 2022,
        title: 'Vide-jouet',
        description: 'Accord de principe de la marie pour le vide-jouet',
      },

      {
        id: 3,
        day: 15,
        mouth: 'mai',
        year: 2022,
        title: 'Création validée !',
        description: "L'association a été validée et existe officiellement !",
      },

      {
        id: 2,
        day: 13,
        mouth: 'mai',
        year: 2022,
        title: 'Site internet',
        description:
          "Un site internet ? Début du developpement d'un site internet",
      },

      {
        id: 1,
        day: 12,
        mouth: 'mai',
        year: 2022,
        title: 'Assemblée constituante',
        description:
          "Réunion de tous les futurs membres de l'association pour valider les documents de création de l'association",
      },
    ];
  }
}
