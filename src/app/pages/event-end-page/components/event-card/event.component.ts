import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/core/models/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent {
  @Input() theEvent!: Event;

  constructor(private router: Router) {}

  navivateToLink(lien: string): void {
    this.router.navigate(lien.split('/'));
  }
}
