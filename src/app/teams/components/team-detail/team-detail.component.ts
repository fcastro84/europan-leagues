import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf, NgStyle } from '@angular/common';
import { Observable } from 'rxjs';
import { TeamService } from '../../services/team.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamResult } from '../../interfaces/team-result.interface';

@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [NgIf, NgFor, NgStyle, AsyncPipe],
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss'],
  providers: [TeamService]
})
export class TeamDetailComponent implements OnInit {
  
  team$!: Observable<TeamResult>;
  idLeague: number = 0;
  private teamService = inject(TeamService);
  private activedRoute = inject(ActivatedRoute);
  private route = inject(Router);

  constructor(){}

  ngOnInit(): void {
     this.idLeague = Number(this.activedRoute.snapshot.paramMap.get('league')) ;
    const idTeam = Number(this.activedRoute.snapshot.paramMap.get('team'));
    this.searchData( idTeam );
  }

  searchData( idTeam: number ){
    this.team$ = this.teamService.getTeam( idTeam );
  }

  goBack(){
    this.route.navigate([ '/countries-league'], { state: { id: this.idLeague }} );
  }

}
