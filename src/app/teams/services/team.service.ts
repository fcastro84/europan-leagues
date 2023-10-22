import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../interfaces/team.interface';

@Injectable()
export class TeamService {

  private readonly http = inject(HttpClient);
  private url = 'https://v3.football.api-sports.io/fixtures?';
  private year = new Date().getFullYear();

  constructor() { }

  getTeam( idTeam: number ): Observable<Team>{
    return this.http.get<Team>(`${this.url}season=${this.year}&team=${idTeam}&last=10`);
  }
}
