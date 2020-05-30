import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Team } from '../team';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  selectedTeam: Team;
  teams: Team[];
  activeComponent = '';

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getTeams();
    
  }

  onSelect(team: Team): void {
    this.selectedTeam = team;
  }

  getTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; })
  }

  changeActiveComponent(newComponent) {
    this.activeComponent = newComponent;
  }
}


