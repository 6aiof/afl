import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { observable} from 'rxjs';
import { DataServiceService } from '../data-service.service';
import { Game } from '../game';
import { Team }from '../team';  
import { Tips } from '../tips';

@Component({
  selector: 'app-tip-teams',
  templateUrl: './tip-teams.component.html',
  styleUrls: ['./tip-teams.component.css']
})
export class TipTeamsComponent implements OnInit {

  tips: Tips[];
  @Input() team: Team;

  constructor(private dataService: DataServiceService) { }

  ngOnChanges(changes: SimpleChanges){

    if (changes['team']){
      this.getTips();
    }
  }
  
  ngOnInit() {
    this.getTips();
  }

  getTips(): void {
    this.dataService.getTips().subscribe(temp => {
      var tempArr = [];

      temp.forEach(element => {
        if(element.tipteamid == this.team.id){
          tempArr.push(element);
        }
      });
      this.tips = tempArr;
    });
  }

}
