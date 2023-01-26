import { Pipe, PipeTransform } from '@angular/core';
import { toDo } from '../../core/models/toDoItem.model';

@Pipe({
  name: 'pourcent',
})
export class ShortenPipe implements PipeTransform {
  transform(toDo: toDo[]): string {
    let calc: number = Math.round(
      (toDo.filter((data) => data.isChecked).length / toDo.length) * 100
    );
    return `${calc} %`;
  }
}
