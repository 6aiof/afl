import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { observable} from 'rxjs';
import { DataServiceService } from '../data-service.service';
import { Game } from '../game';
import { Team }from '../team';  
import { Tips } from '../tips';


@Component({
  selector: 'app-win-venues',
  templateUrl: './win-venues.component.html',
  styleUrls: ['./win-venues.component.css']
})
export class WinVenuesComponent implements OnInit {

  games: Game[];
  @Input() team: Team;

  constructor(private dataService: DataServiceService) { }

  ngOnChanges(changes: SimpleChanges){
    if(changes['team']){
      this.getVenues();
    }
  }

  ngOnInit() {
    this.getVenues()
  }

  getVenues(): void{
    this.dataService.getGames().subscribe(temp => {
      var tempArr = [];
      temp.forEach(element => {
        if(element.winnerteamid == this.team.id && element.round <= 19) {
          tempArr.push(element);
        }
      });
      this.games = tempArr;
    });
  }

}
