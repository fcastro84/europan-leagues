import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Teams } from '../interfaces/teams.interface';

@Injectable()
export class LeagueService {

  private readonly http = inject(HttpClient);
  private url = 'https://v3.football.api-sports.io/standings?';
  private year = new Date().getFullYear();

  constructor() { }

  getLeague( idLeague: number ): Observable<Teams>{
    return this.http.get<Teams>(`${this.url}league=${idLeague}&season=${this.year}`);
  }
}
