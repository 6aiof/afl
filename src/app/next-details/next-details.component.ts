import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { observable } from 'rxjs';
import { DataServiceService } from '../data-service.service';
import { Game } from '../game';
import { Team } from '../team';
import { Tips } from '../tips';

@Component({
  selector: 'app-next-details',
  templateUrl: './next-details.component.html',
  styleUrls: ['./next-details.component.css']
})
export class NextDetailsComponent implements OnInit {
  tips:Tips[];
  games:Game[];
  @Input() team: Team;

  constructor(private dataService: DataServiceService) { }

  ngOnChanges(changes: SimpleChanges){

    if(changes['team']){
      this.getNextDetails();
    }
  }

  ngOnInit() {
    this.getNextDetails();
  }

  getNextDetails(): void{
    this.dataService.getGames().subscribe(temp => {
      var tempArr = [];

      temp.forEach(element => {
        if((element.hteamid == this.team.id || element.ateamid == this.team.id) && element.round >19 && element.round<25) {
          tempArr.push(element);
        }
      });
      this.games = tempArr;
    });
  }

}
