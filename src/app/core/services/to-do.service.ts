import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../environ/env';
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

  toggleIsChecked(toDo: toDo): Observable<toDo> {
    toDo.isChecked = !toDo.isChecked;
    return this.http.patch<toDo>(`${Env.UrlToDo}${toDo.id}/`, toDo);
  }

  createToDoForAnOrganisation(toDo: toDo) {
    this.http
      .post<toDo>(Env.UrlToDo, toDo)
      .subscribe(() =>
        this.oService.GetThenRefreshCurrentOrganisation().subscribe()
      );
  }

  deleteToDo(toDoId: number) {
    this.http
      .delete(`${Env.UrlToDo}${toDoId}/`)
      .subscribe(() =>
        this.oService.GetThenRefreshCurrentOrganisation().subscribe()
      );
  }
}
