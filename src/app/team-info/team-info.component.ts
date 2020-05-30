import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import  { Team } from '../team';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {

  teams: Team[];
  @Input() team: Team;

  constructor(private dataService: DataServiceService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['team']) {
        /*console.log(changes['team'].currentValue);*/
        this.getTeamInfo();
    }
  }

  ngOnInit() {

    this.getTeamInfo();
  }

  getTeamInfo(): void {
    this.dataService.getTeams().subscribe(temp => {
      var tempArr = [];
      temp.forEach(element => {
        if(element.id == this.team.id) {
          tempArr.push(element);
        }
      });
      this.teams = tempArr;
    });
  }

}
