import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up-card',
  templateUrl: './pop-up-card.component.html',
  styleUrls: ['./pop-up-card.component.scss'],
})
export class PopUpCardComponent implements OnInit {
  @Input() information!: string;
  showPopup!: boolean;
  test: boolean = false;

  constructor() {
    this.showPopup = false;
  }

  activate() {
    this.showPopup = !this.showPopup;
  }

  ngOnInit(): void {
    const main = document.querySelector('.main');
    const footer = document.getElementById('footer__Id');

    if (main != null) {
      main.addEventListener('dblclick', () => {
        if (this.showPopup) this.showPopup = false;
      });
    }
    if (footer != null) {
      footer.addEventListener('dblclick', () => {
        if (this.showPopup) this.showPopup = false;
      });
    }

    window.addEventListener('scroll', () => {
      if (this.showPopup) this.showPopup = false;
    });
  }
}
