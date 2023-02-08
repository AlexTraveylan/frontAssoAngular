import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../environ/env';
import { Comptabilite } from '../models/comptabilite.model';

@Injectable({
  providedIn: 'root',
})
export class ComptabiliteService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Comptabilite[]> {
    return this.http.get<Comptabilite[]>(Env.UrlComptabilite);
  }

  create(comptabilite: Comptabilite) {
    return this.http.post<Comptabilite>(Env.UrlComptabilite, comptabilite);
  }
}
