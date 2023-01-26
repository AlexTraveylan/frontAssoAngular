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
    | 'SEND';
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
    }
  }
}
