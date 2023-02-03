import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ios-button',
  templateUrl: './ios-button.component.html',
  styleUrls: ['./ios-button.component.scss'],
})
export class IosButtonComponent {
  @Input() isActive!: boolean;

  toggle() {
    this.isActive = !this.isActive;
  }
}
