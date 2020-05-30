import { Component, OnInit,Input,SimpleChanges } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import  { Game } from '../game';
import  { Team } from '../team';
import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';
import { element } from 'protractor';
import { TemplateParseResult } from '@angular/compiler';

@Component({
  selector: 'app-head-to-head',
  templateUrl: './head-to-head.component.html',
  styleUrls: ['./head-to-head.component.css']
})
export class HeadToHeadComponent implements OnInit {

  games: Game[];
  teams: Team[];
  @Input() team: Team;

  constructor(private dataService: DataServiceService) { }

  ngOnChanges(changes: SimpleChanges){
    if(changes['team']){
      this.getHeadToHead();
    }
  }

  ngOnInit(): void {
    this.getHeadToHead
  }
  

  getHeadToHead(): void{
    this.dataService.getGames().subscribe(temp => {
      var temArr = [];
      temp.forEach(element => {
        if(element.winnerteamid == this.team.id  
               && element.round <= 19
               && element.complete==100) {
          temArr.push(element);
        } 
      });
      this.games = temArr;
    });
  }

}
