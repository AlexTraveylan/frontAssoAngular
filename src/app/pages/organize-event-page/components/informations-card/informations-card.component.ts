import { Component, Input, OnInit } from '@angular/core';
import { Organisation } from 'src/app/core/models/organisation.model';

@Component({
  selector: 'app-informations-card',
  templateUrl: './informations-card.component.html',
  styleUrls: ['./informations-card.component.scss'],
})
export class InformationsCardComponent implements OnInit {
  @Input() organisation!: Organisation;
  daysLeft!: number;

  ngOnInit(): void {
    const now = new Date();
    const end = new Date(this.organisation.date);
    const timeLeft = Math.max(0, end.getTime() - now.getTime());
    this.daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  }
}
