import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { TeamResult } from '../interfaces/team-result.interface';

@Injectable()
export class TeamService {

  private readonly http = inject(HttpClient);
  private url = 'https://v3.football.api-sports.io/fixtures?';
  private year = new Date().getFullYear();
  private lastPlayed = 10;

  constructor() { }

  getTeam( idTeam: number ): Observable<TeamResult>{
    return this.http.get<TeamResult>(`${this.url}season=${this.year}&team=${idTeam}&last=${this.lastPlayed}`);
  }
}
