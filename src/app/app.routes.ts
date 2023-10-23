import { Routes } from '@angular/router';
import { CountriesLeagueComponent } from './teams/countries-league/countries-league.component';
import { TeamDetailComponent } from './teams/components/team-detail/team-detail.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/countries-league',
        pathMatch: 'full'
    },
    {
        path: 'countries-league',
        component: CountriesLeagueComponent
    },
    {
        path: 'team/:league/:team',
        component: TeamDetailComponent
    }
];
