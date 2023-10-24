import { Component, Input, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { Teams } from '../../interfaces/teams.interface';
import { LeagueService } from '../../services/league.service';


@Component({
  selector: 'app-team-list',
  standalone: true,
  imports: [ AsyncPipe, NgIf, NgFor, RouterLink],
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent {

  teams$!: Observable<Teams>;
  
  @Input() set country( countryId: number){
    this.teams$ = this.leagueService.getLeague( countryId );
  }

  private leagueService = inject(LeagueService);

}
