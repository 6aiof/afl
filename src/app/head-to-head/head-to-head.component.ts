import { Component, OnInit , Input, OnChanges, SimpleChanges } from '@angular/core';
import {observable} from 'rxjs';
import{DataServiceService} from '../data-service.service';
import {Team} from '../team';
import { element } from 'protractor';
import { Game } from '../game';



@Component({
  selector: 'app-head-to-head',
  templateUrl: './head-to-head.component.html',
  styleUrls: ['./head-to-head.component.css']
})
export class HeadToHeadComponent implements OnInit {

  rivalTeam: Team;
  games:Game[];
  teams:Team[];
  @Input() team: Team;

  constructor(private dataService: DataServiceService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['team']) {
        console.log(changes['team'].currentValue);
       
        if(this.team) this.getTeams();
    }
  }

  ngOnInit() {
    if(this.team) this.getTeams();
    //this.getGames();
  }

  onSelect(teamID: number):void {
    
    this.rivalTeam = this.teams.find(element => element.id == teamID);
    this.getGames();
  }

  getGames(): void {
    

  this.dataService.getGames().subscribe(temp => {
    var tempArr = [];
    temp.forEach(element => {
      if(((element.hteamid == this.team.id && element.ateamid == this.rivalTeam.id) || (element.ateamid == this.team.id && element.hteamid == this.rivalTeam.id)) && element.round <=19) {
        tempArr.push(element);
      }
    });
    this.games = tempArr;
  });
}

  getTeams(): void {
    this.dataService.getTeams().subscribe(temp => {

    
      var temArr =[];

      temp.forEach(element => {
        if(element.id != this.team.id){
          temArr.push(element);
        }
      });

this.teams = temArr;
    });

}
 
}