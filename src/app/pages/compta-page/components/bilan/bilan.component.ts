import { Component, Input, OnInit } from '@angular/core';
import { Comptabilite } from 'src/app/core/models/comptabilite.model';

@Component({
  selector: 'app-bilan',
  templateUrl: './bilan.component.html',
  styleUrls: ['./bilan.component.scss'],
})
export class BilanComponent implements OnInit {
  @Input() comptabilites!: Comptabilite[];
  recette: number = 0;
  depenses: number = 0;
  donToSchool!: number;

  ngOnInit(): void {
    for (let elem of this.comptabilites) {
      if (elem.isPositive) {
        this.recette = this.recette + parseFloat(elem.amount);
      } else {
        this.depenses = this.depenses + parseFloat(elem.amount);
      }
    }
  }
}
