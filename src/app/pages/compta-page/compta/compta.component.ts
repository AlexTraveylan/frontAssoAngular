import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Comptabilite } from 'src/app/core/models/comptabilite.model';
import { ComptabiliteService } from 'src/app/core/services/comptabilite.service';

@Component({
  selector: 'app-compta',
  templateUrl: './compta.component.html',
  styleUrls: ['./compta.component.scss'],
})
export class ComptaComponent {
  comptabilites$!: Observable<Comptabilite[]>;

  constructor(private cService: ComptabiliteService) {
    this.comptabilites$ = this.cService.getAll();
  }
}
