import { Component, Input } from '@angular/core';
import { Organisation } from 'src/app/core/models/organisation.model';

@Component({
  selector: 'app-informations-card',
  templateUrl: './informations-card.component.html',
  styleUrls: ['./informations-card.component.scss'],
})
export class InformationsCardComponent {
  @Input() organisation!: Organisation;
}
