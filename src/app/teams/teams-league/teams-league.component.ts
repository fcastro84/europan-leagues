import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { LeagueService } from '../services/league.service';
import { Teams } from '../interfaces/teams.interface';
import { COUNTRIES, Country } from '../interfaces/country.interface';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-teams-league',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './teams-league.component.html',
  styleUrls: ['./teams-league.component.scss'],
  providers: [LeagueService]
})
export class TeamsLeagueComponent {

  league$!: Observable<Teams>;
  countries: Country[] = COUNTRIES;
  private leagueService = inject(LeagueService);

  searchData(idLeague: number){
    this.league$ = this.leagueService.getLeague( idLeague );
  }

}
