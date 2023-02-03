import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Organisation } from 'src/app/core/models/organisation.model';
import { OrganisationService } from 'src/app/core/services/organisation.service';

@Component({
  selector: 'app-organize-event',
  templateUrl: './organize-event.component.html',
  styleUrls: ['./organize-event.component.scss'],
})
export class OrganizeEventComponent {
  isAcces: boolean;
  userName$!: BehaviorSubject<string>;
  message!: string;
  organisation$!: BehaviorSubject<Organisation>;
  isLimitTime$!: BehaviorSubject<boolean>;

  loginForm!: FormGroup;

  constructor(
    private oService: OrganisationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.userName$ = new BehaviorSubject<string>('Unknow User');
    this.isLimitTime$ = new BehaviorSubject<boolean>(false);
    this.isAcces = false;
    this.organisation$ = this.oService.bCurrentOrganisation$;

    this.loginForm = this.formBuilder.group({
      login: [null],
      password: [null],
    });
  }

  submit() {
    this.oService
      .getOrganisationByPassword(this.loginForm.value.password)
      .subscribe({
        next: (currentOrga) => {
          this.oService
            .GetThenRefreshCurrentOrganisation(currentOrga[0])
            .subscribe((currentOrga) => {
              const today = new Date();
              const deadline = new Date(currentOrga.date);

              this.isLimitTime$.next(
                deadline.getTime() < 3 * (1000 * 60 * 60 * 24) + today.getTime()
              );
              this.isAcces = true;
              this.userName$.next(this.loginForm.value.login);
            });
        },
        error: () => {
          this.message = 'Aucune organisation trouvée';
        },
      });
  }

  goToCreateOrga() {
    this.router.navigate(['createOrga']);
  }
}
