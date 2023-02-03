import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Env } from '../environ/env';
import { Organisation } from '../models/organisation.model';

@Injectable({
  providedIn: 'root',
})
export class OrganisationService {
  bCurrentOrganisation$!: BehaviorSubject<Organisation>;
  orga: Organisation;

  constructor(private http: HttpClient) {
    this.orga = new Organisation(-1, '', '', '', '', new Date(), []);
    this.bCurrentOrganisation$ = new BehaviorSubject<Organisation>(this.orga);
  }

  GetThenRefreshCurrentOrganisation(
    cOrganisation: Organisation
  ): Observable<Organisation> {
    return this.http
      .get<Organisation>(`${Env.UrlOrganisation}${cOrganisation.id}/`)
      .pipe(
        tap((organisation) => this.bCurrentOrganisation$.next(organisation))
      );
  }

  getOrganisationById(organisation_id: number): Observable<Organisation> {
    return this.http.get<Organisation>(
      `${Env.UrlOrganisation}${organisation_id}/`
    );
  }

  getOrganisationByPassword(
    organisation_password: string
  ): Observable<Organisation[]> {
    return this.http.get<Organisation[]>(
      `${Env.UrlOrganisation}?password=${organisation_password}`
    );
  }

  createOrga(organisation: Organisation): Observable<Organisation> {
    return this.http.post<Organisation>(Env.UrlOrganisation, organisation);
  }
}
