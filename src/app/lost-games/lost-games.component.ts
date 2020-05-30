import { Component, OnInit,Input,SimpleChanges} from '@angular/core';
import { DataServiceService } from '../data-service.service';
import  { Game } from '../game';
import  { Team } from '../team';
import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-lost-games',
  templateUrl: './lost-games.component.html',
  styleUrls: ['./lost-games.component.css']
})
export class LostGamesComponent implements OnInit {

  games: Game[];
  @Input() team: Team;

  constructor(private dataService: DataServiceService) { }

  ngOnChanges(changes: SimpleChanges){
    if(changes['team']){
      this.getLossGames();
    }
  }

  ngOnInit() {
    this.getLossGames();
  }

  getLossGames(): void{
    this.dataService.getGames().subscribe(temp => {
      var temArr = [];
      temp.forEach(element => {
        if((element.ateamid == this.team.id  || element.hteamid == this.team.id) && element.winnerteamid!= this.team.id && element.round <= 19) {
          temArr.push(element);
        } 
      });
      this.games = temArr;
    });
  }
}


