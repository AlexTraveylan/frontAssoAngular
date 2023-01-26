import { Component, Input } from '@angular/core';
import { ConseilEcole } from 'src/app/core/models/conseil.model';

@Component({
  selector: 'app-conseil-card',
  templateUrl: './conseil-card.component.html',
  styleUrls: ['./conseil-card.component.scss'],
})
export class ConseilCardComponent {
  @Input() conseil!: ConseilEcole;
  @Input() isHidden!: boolean;

  toggle(): void {
    this.isHidden = !this.isHidden;
  }
}
