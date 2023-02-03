import { Component, Input, OnInit } from '@angular/core';
import { Organisation } from 'src/app/core/models/organisation.model';
import { toDo } from 'src/app/core/models/toDoItem.model';
import { OrganisationService } from 'src/app/core/services/organisation.service';
import { ToDoService } from 'src/app/core/services/to-do.service';

@Component({
  selector: 'app-to-do-card',
  templateUrl: './to-do-card.component.html',
  styleUrls: ['./to-do-card.component.scss'],
})
export class ToDoCardComponent implements OnInit {
  @Input() toDo!: toDo;
  @Input() userName!: string;
  @Input() isLimitTime!: boolean;
  @Input() organisation!: Organisation;

  constructor(
    private tdService: ToDoService,
    private oService: OrganisationService
  ) {}

  ngOnInit(): void {
    if (this.isLimitTime) {
      // si reservé, alors passage en reserve et urgent.
      if (this.toDo.statut == 1) {
        this.tdService.update({ ...this.toDo, statut: 3 }).subscribe();
        // si pas reservé, alors passage en urgent
      } else if (this.toDo.statut == 0) {
        this.tdService.update({ ...this.toDo, statut: 2 }).subscribe();
      }
      // si deja en validé ou reservé ou urgent, on touche pas.
    }
  }

  reserve(toDo: toDo) {
    // initialisation et typage des variables utiles
    let user: string | null;
    let isConfirm: boolean;
    let statut: 0 | 1 | 2 | 3 | 4;
    let currentDate: Date | null;

    // assignation des variables utiles selon les cas
    if (toDo.userAssigned) {
      user = null;
      currentDate = null;
      isConfirm = confirm(
        `Êtes-vous sûr de vouloir annuler la reservation de ${toDo.userAssigned} ?`
      );
      // 0 si on a encore du temps, 2 pour urgent sinon
      this.isLimitTime ? (statut = 2) : (statut = 0);
    } else {
      user = this.userName;
      currentDate = new Date();
      isConfirm = true;
      // 1 c'est reservé, 3 c'est reservé mais avec une date depassé
      this.isLimitTime ? (statut = 3) : (statut = 1);
    }

    // reserver ou annuler la reservation
    if (isConfirm) {
      this.tdService
        .update({
          ...toDo,
          userAssigned: user,
          statut: statut,
          dateTimeAssigned: currentDate,
        })
        .subscribe(() => {
          this.oService
            .GetThenRefreshCurrentOrganisation(this.organisation)
            .subscribe();
        });
    }
  }

  validate(toDo: toDo) {
    if (toDo.userAssigned) {
      if (toDo.statut == 4) {
        const statut = this.isLimitTime ? 3 : 1;
        this.tdService.update({ ...toDo, statut: statut }).subscribe(() => {
          this.oService
            .GetThenRefreshCurrentOrganisation(this.organisation)
            .subscribe();
        });
      } else {
        this.tdService.update({ ...toDo, statut: 4 }).subscribe(() => {
          this.oService
            .GetThenRefreshCurrentOrganisation(this.organisation)
            .subscribe();
        });
      }
    }
  }

  delete(toDoId: number) {
    let isConfirm = confirm('Êtes-vous sûr de vouloir supprimer ?');
    if (isConfirm) {
      this.tdService.deleteToDo(toDoId, this.organisation);
    }
  }
}
