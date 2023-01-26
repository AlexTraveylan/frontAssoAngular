import { Component } from '@angular/core';
import { Links } from 'src/app/core/models/links.model';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent {
  links: Array<Links> = [
    {
      id: 1,
      name: 'Site du groupe scolaire',
      url: 'https://www.bordeaux.fr/o94845/nelson-mandela-maternelle',
    },
    {
      id: 2,
      name: "Statuts de l'association",
      url: '/assets/documents/administratif/statuts.pdf',
    },
  ];
}
