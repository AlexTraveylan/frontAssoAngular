import { Pipe, PipeTransform } from '@angular/core';
import { toDo } from '../../core/models/toDoItem.model';

@Pipe({
  name: 'pourcent',
})
export class ShortenPipe implements PipeTransform {
  transform(toDos: toDo[] | null): string {
    let calc: string = '0';

    if (toDos && toDos.length != 0) {
      calc = Math.round(
        (toDos.filter((data) => data.statut == 4).length / toDos.length) * 100
      ).toString();
    }
    return calc;
  }
}
