import { toDo } from './toDoItem.model';

export class Organisation {
  constructor(
    public id: number,
    public typeEvent: string,
    public description: string,
    public lieu: string,
    public date: string,
    public toDo: toDo[],
    public horaire?: string,
    public tarifs?: string
  ) {}
}
