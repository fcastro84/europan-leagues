import { Component } from '@angular/core';
import { NgClass, NgFor, UpperCasePipe } from '@angular/common';

import { LeagueService } from '../services/league.service';
import { Country } from '../interfaces/country.interface';
import { COUNTRIES } from '../interfaces/mock-countries';
import { TeamListComponent } from '../components/team-list/team-list.component';



@Component({
  selector: 'app-countries-league',
  standalone: true,
  imports: [NgFor, NgClass, UpperCasePipe, TeamListComponent],
  templateUrl: './countries-league.component.html',
  styleUrls: ['./countries-league.component.scss'],
  providers: [LeagueService]
})
export class CountriesLeagueComponent {
  
  title = 'Football updates';
  idSelect: number;
  countries: Country[] = COUNTRIES;
  
  constructor(){
    this.idSelect = history.state.id ?? 39;
  }
}
