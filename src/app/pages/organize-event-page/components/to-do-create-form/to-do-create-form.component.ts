import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Organisation } from 'src/app/core/models/organisation.model';
import { toDo } from 'src/app/core/models/toDoItem.model';
import { ToDoService } from 'src/app/core/services/to-do.service';

@Component({
  selector: 'app-to-do-create-form',
  templateUrl: './to-do-create-form.component.html',
  styleUrls: ['./to-do-create-form.component.scss'],
})
export class ToDoCreateFormComponent implements OnInit {
  @Input() organisation!: Organisation;
  toDoForm!: FormGroup;
  toDoCardPreview$!: Observable<toDo>;
  isVisibleForm!: boolean;

  constructor(
    private tdService: ToDoService,
    private formBuilder: FormBuilder
  ) {
    this.isVisibleForm = false;
  }

  ngOnInit(): void {
    this.toDoForm = this.formBuilder.group(
      {
        description: [null],
        informations: [null],
        isChecked: [false],
        orgaId: [this.organisation.id],
      },
      { updateOn: 'blur' }
    );

    this.toDoCardPreview$ = this.toDoForm.valueChanges.pipe(
      map((formValue) => ({
        ...formValue,
        id: -1,
      }))
    );
  }

  toggleTodoForm() {
    this.isVisibleForm = !this.isVisibleForm;
  }

  onSubmit() {
    this.tdService.createToDoForAnOrganisation(
      this.toDoForm.value,
      this.organisation
    );
    this.isVisibleForm = false;
  }
}
