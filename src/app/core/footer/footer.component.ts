import { formatDate } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  date!: string;

  constructor() {
    this.date = formatDate(new Date(), 'dd/MM/yyyy', 'fr');
  }
}
