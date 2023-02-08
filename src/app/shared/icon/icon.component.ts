import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Icons } from '../enums/icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() type!:
    | 'CROSS'
    | 'EDIT'
    | 'NAV'
    | 'DELETE'
    | 'INFOS'
    | 'CHECKED'
    | 'PLUS'
    | 'SEND'
    | 'LEFT'
    | 'CIRCLE'
    | 'CIRCLECHECKED'
    | 'CHEVRONLEFT'
    | 'CHEVRONRIGHT'
    | 'CHEVRONDOWN'
    | 'CHEVRONUP';
  icon!: IconDefinition;

  ngOnInit(): void {
    if (this.type == 'CROSS') {
      this.icon = Icons.CROSS;
    } else if (this.type == 'EDIT') {
      this.icon = Icons.EDIT;
    } else if (this.type == 'NAV') {
      this.icon = Icons.NAV;
    } else if (this.type == 'DELETE') {
      this.icon = Icons.DELETE;
    } else if (this.type == 'INFOS') {
      this.icon = Icons.INFOS;
    } else if (this.type == 'CHECKED') {
      this.icon = Icons.CHECKED;
    } else if (this.type == 'PLUS') {
      this.icon = Icons.PLUS;
    } else if (this.type == 'SEND') {
      this.icon = Icons.SEND;
    } else if (this.type == 'LEFT') {
      this.icon = Icons.LEFT;
    } else if (this.type == 'CIRCLE') {
      this.icon = Icons.CIRCLE;
    } else if (this.type == 'CIRCLECHECKED') {
      this.icon = Icons.CIRCLECHECKED;
    } else if (this.type == 'CHEVRONLEFT') {
      this.icon = Icons.CHEVRONLEFT;
    } else if (this.type == 'CHEVRONRIGHT') {
      this.icon = Icons.CHEVRONRIGHT;
    } else if (this.type == 'CHEVRONDOWN') {
      this.icon = Icons.CHEVRONDOWN;
    } else if (this.type == 'CHEVRONUP') {
      this.icon = Icons.CHEVRONUP;
    }
  }
}
