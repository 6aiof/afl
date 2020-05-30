import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { MyGamesComponent } from './my-games/my-games.component';
import { DataServiceService } from './data-service.service';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { NextDetailsComponent } from './next-details/next-details.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { TipTeamsComponent } from './tip-teams/tip-teams.component';
import { WinGamesComponent } from './win-games/win-games.component';
import { WinVenuesComponent } from './win-venues/win-venues.component';
import { HeadToHeadComponent } from './head-to-head/head-to-head.component';
import { LostGamesComponent } from './lost-games/lost-games.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    MyGamesComponent,
    NextDetailsComponent,
    TeamInfoComponent,
    TipTeamsComponent,
    WinGamesComponent,
    WinVenuesComponent,
    HeadToHeadComponent,
    LostGamesComponent,
    
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
