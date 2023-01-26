import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pop-up-card',
  templateUrl: './pop-up-card.component.html',
  styleUrls: ['./pop-up-card.component.scss'],
})
export class PopUpCardComponent {
  @Input() information!: string;
  showPopup!: boolean;

  constructor() {
    this.showPopup = false;
  }

  activate() {
    this.showPopup = !this.showPopup;
  }
}
