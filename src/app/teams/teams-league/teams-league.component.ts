import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EMPTY, Observable, switchMap } from 'rxjs';

import { LeagueService } from '../services/league.service';
import { Teams } from '../interfaces/teams.interface';
import { COUNTRIES, Country } from '../interfaces/country.interface';
import { ActivatedRoute, RouterLink, ParamMap } from '@angular/router';



@Component({
  selector: 'app-teams-league',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './teams-league.component.html',
  styleUrls: ['./teams-league.component.scss'],
  providers: [LeagueService]
})
export class TeamsLeagueComponent implements OnInit {
  
  idSelect: number;
  league$!: Observable<Teams>;
  countries: Country[] = COUNTRIES;
  private leagueService = inject(LeagueService);
  private activeRoute = inject(ActivatedRoute);

  constructor(){
    this.idSelect = history.state.id ?? 39;
  }

  ngOnInit(): void {
   this.searchData(this.idSelect);
  }

  searchData(idLeague: number){
    this.idSelect = idLeague;
    this.league$ = this.leagueService.getLeague( idLeague );
  }

}
