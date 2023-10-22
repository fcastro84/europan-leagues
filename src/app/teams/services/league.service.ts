import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Teams } from '../interfaces/teams.interface';
import { Observable } from 'rxjs';

@Injectable()
export class LeagueService {

  private readonly http = inject(HttpClient);
  private url = 'https://v3.football.api-sports.io/standings?';
  //private readonly API_KEY = '2b3a0dde64897b0f536b5b666996624b';
  private year = new Date().getFullYear();

  constructor() { }

  getLeague( idLeague: number ): Observable<Teams>{
    return this.http.get<Teams>(`${this.url}league=${idLeague}&season=${this.year}`);
  }
}
