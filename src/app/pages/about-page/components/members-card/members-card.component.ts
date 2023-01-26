import { Component, Input } from '@angular/core';
import { Member } from 'src/app/core/models/member.model';

@Component({
  selector: 'app-members-card',
  templateUrl: './members-card.component.html',
  styleUrls: ['./members-card.component.scss'],
})
export class MembersCardComponent {
  @Input() member!: Member;
}
