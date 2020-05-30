import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import {observable} from 'rxjs';
import{DataServiceService} from '../data-service.service';
import {Game} from '../game';
import {Team} from '../team';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.css']
})
export class MyGamesComponent implements OnInit {
  
  games:Game[];
  @Input() team: Team;

  constructor(private dataService: DataServiceService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['team']) {
        /*console.log(changes['team'].currentValue);*/
        this.getGames();
    }
  }

  ngOnInit()  {

    this.getGames();
  }

  getGames() : void {
    this.dataService.getGames().subscribe(temp => {


    var  tempArr = [];
    
    temp.forEach(element => {
      if((element.hteamid == this.team.id || element.ateamid == this.team.id) && element.round <=19) {
        tempArr.push(element);    
        
      } 
  });
  this.games = tempArr;
});
  }

  
}
