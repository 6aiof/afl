import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import  { Game } from '../game';
import  { Team } from '../team';
import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-win-games',
  templateUrl: './win-games.component.html',
  styleUrls: ['./win-games.component.css']
})
export class WinGamesComponent implements OnInit {

  games: Game[];
  @Input() team: Team;

  constructor(private dataService: DataServiceService) { }

  ngOnChanges(changes: SimpleChanges){
    if(changes['team']){
      this.getWinGames();
    }
  }

  ngOnInit() {
    this.getWinGames();
  }

  getWinGames(): void{
    this.dataService.getGames().subscribe(temp => {
      var temArr = [];
      temp.forEach(element => {
        if(element.winnerteamid == this.team.id  && element.round <= 19) {
          temArr.push(element);
        } 
      });
      this.games = temArr;
    });
  }
}

    
