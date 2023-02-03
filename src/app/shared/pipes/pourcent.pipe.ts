import { Pipe, PipeTransform } from '@angular/core';
import { toDo } from '../../core/models/toDoItem.model';

@Pipe({
  name: 'pourcent',
})
export class ShortenPipe implements PipeTransform {
  transform(toDo: toDo[] | null): number {
    let calc: number = 0;
    if (toDo && toDo.length != 0) {
      calc = Math.round(
        (toDo.filter((data) => data.statut == 4).length / toDo.length) * 100
      );
    }
    return calc;
  }
}
