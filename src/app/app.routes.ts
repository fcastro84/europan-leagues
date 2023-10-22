import { Routes } from '@angular/router';
import { TeamsLeagueComponent } from './teams/teams-league/teams-league.component';
import { TeamDetailComponent } from './teams/components/team-detail/team-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: TeamsLeagueComponent
    },
    {
        path: 'team/:league/:team',
        component: TeamDetailComponent
    }
];
