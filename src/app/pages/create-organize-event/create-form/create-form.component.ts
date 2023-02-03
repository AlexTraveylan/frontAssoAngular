import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Organisation } from 'src/app/core/models/organisation.model';
import { OrganisationService } from 'src/app/core/services/organisation.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent {
  organisationForm!: FormGroup;
  organisationPreview$!: Observable<Organisation>;

  constructor(
    private formBuilder: FormBuilder,
    private oService: OrganisationService,
    private router: Router
  ) {
    this.organisationForm = this.formBuilder.group({
      password: [null],
      typeEvent: [null],
      description: [null],
      lieu: [null],
      date: [null],
      horaire: [null],
      tarifs: [null],
    });

    this.organisationPreview$ = this.organisationForm.valueChanges;
  }

  submit() {
    this.oService.createOrga(this.organisationForm.value).subscribe(() => {
      this.router.navigate(['orga']);
    });
  }

  goBackToOrga() {
    this.router.navigate(['orga']);
  }
}
