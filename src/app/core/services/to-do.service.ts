import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../environ/env';
import { Organisation } from '../models/organisation.model';
import { toDo } from '../models/toDoItem.model';
import { OrganisationService } from './organisation.service';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  constructor(
    private http: HttpClient,
    private oService: OrganisationService
  ) {}

  update(toDo: toDo): Observable<toDo> {
    return this.http.patch<toDo>(`${Env.UrlToDo}${toDo.id}/`, toDo);
  }

  createToDoForAnOrganisation(toDo: toDo, orga: Organisation) {
    this.http
      .post<toDo>(Env.UrlToDo, toDo)
      .subscribe(() =>
        this.oService.GetThenRefreshCurrentOrganisation(orga).subscribe()
      );
  }

  deleteToDo(toDoId: number, orga: Organisation) {
    this.http
      .delete(`${Env.UrlToDo}${toDoId}/`)
      .subscribe(() =>
        this.oService.GetThenRefreshCurrentOrganisation(orga).subscribe()
      );
  }
}
