import { Component, Input } from '@angular/core';
import { Event } from 'src/app/core/models/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent {
  @Input() theEvent!: Event;

  ouvreNouvelOnglet(url: string) {
    window.open(url, '_blank');
  }
}
