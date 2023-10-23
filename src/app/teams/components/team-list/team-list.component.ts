import { Component, Input } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { Teams } from '../../interfaces/teams.interface';


@Component({
  selector: 'app-team-list',
  standalone: true,
  imports: [ AsyncPipe, NgIf, NgFor, RouterLink],
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent {

  @Input() teams$: Observable<Teams> | null = null;

}
