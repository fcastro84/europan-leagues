import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TeamService } from '../../services/team.service';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../../interfaces/team.interface';

@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss'],
  providers: [TeamService]
})
export class TeamDetailComponent implements OnInit {
  
  team$!: Observable<Team>;
  private teamService = inject(TeamService);
  private activedRoute = inject(ActivatedRoute);

  constructor(){}

  ngOnInit(): void {
    const idLeague = Number(this.activedRoute.snapshot.paramMap.get('league')) ;
    const idTeam = Number(this.activedRoute.snapshot.paramMap.get('team'));
    this.searchData( idTeam);
  }

  searchData( idTeam: number ){
    this.team$ = this.teamService.getTeam( idTeam );
  }

}
