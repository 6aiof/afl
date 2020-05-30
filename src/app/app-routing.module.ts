import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ParentComponent } from './parent/parent.component';
import { MyGamesComponent } from './my-games/my-games.component';
import { WinGamesComponent } from './win-games/win-games.component';
import { WinVenuesComponent } from './win-venues/win-venues.component';
import { NextDetailsComponent } from './next-details/next-details.component';
import { TipTeamsComponent } from './tip-teams/tip-teams.component';


const routes: Routes = [
  {path: 'WinGames' , component: WinGamesComponent},
  { path: 'MyGames', component: MyGamesComponent },
  { path: 'WinVenues', component: WinVenuesComponent  },
  { path: 'NextDetails', component: NextDetailsComponent },
  { path: 'TipTeams', component: TipTeamsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
