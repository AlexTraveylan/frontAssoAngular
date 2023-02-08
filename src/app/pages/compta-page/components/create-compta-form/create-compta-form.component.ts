import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Comptabilite } from 'src/app/core/models/comptabilite.model';
import { ComptabiliteService } from 'src/app/core/services/comptabilite.service';

@Component({
  selector: 'app-create-compta-form',
  templateUrl: './create-compta-form.component.html',
  styleUrls: ['./create-compta-form.component.scss'],
})
export class CreateComptaFormComponent {
  isVisibleForm: boolean;
  comptabiliteForm!: FormGroup;
  comptabilitePreview$!: Observable<Comptabilite>;

  constructor(
    private cService: ComptabiliteService,
    private formBuilder: FormBuilder
  ) {
    this.isVisibleForm = false;

    this.comptabiliteForm = this.formBuilder.group({
      date: [null],
      source: [null],
      label: [null],
      amount: [null],
      paiementType: [null],
      isPositive: [true],
      note: [null],
      requestToken: [null],
    });

    this.comptabilitePreview$ = this.comptabiliteForm.valueChanges.pipe(
      map((formValue) => ({
        ...formValue,
        id: -1,
      }))
    );
  }

  toogleVisible(): void {
    this.isVisibleForm = !this.isVisibleForm;
  }

  onSubmit(): void {
    this.cService.create(this.comptabiliteForm.value).subscribe();
  }
}
