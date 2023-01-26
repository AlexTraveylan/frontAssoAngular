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
    this.orga = new Organisation(-1, '', '', '', '', []);
    this.bCurrentOrganisation$ = new BehaviorSubject<Organisation>(this.orga);
    this.GetThenRefreshCurrentOrganisation().subscribe();
  }

  GetThenRefreshCurrentOrganisation(): Observable<Organisation> {
    return this.http
      .get<Organisation>(`${Env.UrlOrganisation}1/`)
      .pipe(
        tap((organisation) => this.bCurrentOrganisation$.next(organisation))
      );
  }

  getOrganisationById(organisation_id: number): Observable<Organisation> {
    return this.http.get<Organisation>(
      `${Env.UrlOrganisation}${organisation_id}/`
    );
  }
}
