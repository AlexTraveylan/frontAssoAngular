import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isHidden: boolean = true;

  hide(): void {
    this.isHidden = !this.isHidden;
  }

  ngOnInit(): void {
    const main = document.querySelector('.main');
    const footer = document.getElementById('footer__Id');
    if (main != null) {
      main.addEventListener('click', () => {
        this.isHidden = true;
      });
    }
    if (footer != null) {
      footer.addEventListener('click', () => {
        this.isHidden = true;
      });
    }
  }
}
