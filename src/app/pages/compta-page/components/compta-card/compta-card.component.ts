import { Component, Input } from '@angular/core';
import { Comptabilite } from 'src/app/core/models/comptabilite.model';

@Component({
  selector: 'app-compta-card',
  templateUrl: './compta-card.component.html',
  styleUrls: ['./compta-card.component.scss'],
})
export class ComptaCardComponent {
  @Input() comptabilites!: Comptabilite[];
}
