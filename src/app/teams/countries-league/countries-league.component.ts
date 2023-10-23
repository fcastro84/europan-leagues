import { Component, OnInit, inject } from '@angular/core';
import { NgClass, NgFor, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';

import { LeagueService } from '../services/league.service';
import { Teams } from '../interfaces/teams.interface';
import { Country } from '../interfaces/country.interface';
import { COUNTRIES } from '../interfaces/mock-contries';
import { TeamListComponent } from '../components/team-list/team-list.component';



@Component({
  selector: 'app-countries-league',
  standalone: true,
  imports: [NgFor, NgClass, UpperCasePipe, TeamListComponent],
  templateUrl: './countries-league.component.html',
  styleUrls: ['./countries-league.component.scss'],
  providers: [LeagueService]
})
export class CountriesLeagueComponent implements OnInit {
  
  title = 'Football updates';
  idSelect: number;
  teams$!: Observable<Teams>;
  countries: Country[] = COUNTRIES;
  private leagueService = inject(LeagueService);

  constructor(){
    this.idSelect = history.state.id ?? 39;
  }

  ngOnInit(): void {
   this.searchData(this.idSelect);
  }

  searchData(idLeague: number){
    this.idSelect = idLeague;
    this.teams$ = this.leagueService.getLeague( idLeague );
  }

}
