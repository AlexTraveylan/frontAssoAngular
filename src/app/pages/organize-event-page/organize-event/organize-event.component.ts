import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Organisation } from 'src/app/core/models/organisation.model';
import { OrganisationService } from 'src/app/core/services/organisation.service';

@Component({
  selector: 'app-organize-event',
  templateUrl: './organize-event.component.html',
  styleUrls: ['./organize-event.component.scss'],
})
export class OrganizeEventComponent {
  password!: string;
  isAcces: boolean;
  message!: string;
  organisation$!: BehaviorSubject<Organisation>;

  constructor(private oService: OrganisationService) {
    this.isAcces = false;
    this.organisation$ = this.oService.bCurrentOrganisation$;
  }

  submit() {
    if (this.password == '1234') {
      this.isAcces = true;
    } else {
      this.message = 'Acces refusé';
    }
  }

  // toDo: toDo[] = [
  //   {
  //     description: 'Faire une affiche',
  //     isChecked: false,
  //   },
  //   {
  //     description: 'Faire des fleches',
  //     isChecked: false,
  //   },
  //   {
  //     description: "Demande d'autorisation",
  //     isChecked: true,
  //   },
  //   {
  //     description: 'Publication educartable',
  //     isChecked: false,
  //   },
  //   {
  //     description: 'Publication instagram',
  //     isChecked: false,
  //   },
  //   {
  //     description: 'Publication site web',
  //     isChecked: false,
  //   },
  //   {
  //     description: "Afficher les affiches à l'école",
  //     isChecked: false,
  //   },
  //   {
  //     description: 'Faire les courses manquantes',
  //     isChecked: false,
  //   },
  //   {
  //     description: 'Preparation de la nourriture',
  //     isChecked: false,
  //   },
  // ];

  // organisation: Organisation = {
  //   id: 1,
  //   typeEvent: 'Gouter des parents',
  //   description: 'Vente de boissons, crepes et gauffres',
  //   lieu: "A l'école devant l'entrée élémentaire",
  //   date: '27 janvier 2023',
  //   toDo: this.toDo,
  //   horaire: '16h30 - 17h30',
  //   tarifs: 'Crepes, gauffres : 1 €, boisson : 50 cts',
  // };
}
