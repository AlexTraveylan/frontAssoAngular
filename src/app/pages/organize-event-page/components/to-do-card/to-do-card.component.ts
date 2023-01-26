import { Component, Input } from '@angular/core';
import { toDo } from 'src/app/core/models/toDoItem.model';
import { OrganisationService } from 'src/app/core/services/organisation.service';
import { ToDoService } from 'src/app/core/services/to-do.service';

@Component({
  selector: 'app-to-do-card',
  templateUrl: './to-do-card.component.html',
  styleUrls: ['./to-do-card.component.scss'],
})
export class ToDoCardComponent {
  @Input() toDo!: toDo;

  constructor(
    private tdService: ToDoService,
    private oService: OrganisationService
  ) {}

  toggle(toDo: toDo) {
    this.tdService
      .toggleIsChecked(toDo)
      .subscribe(() =>
        this.oService.GetThenRefreshCurrentOrganisation().subscribe()
      );
  }

  delete(toDoId: number) {
    this.tdService.deleteToDo(toDoId);
  }
}
