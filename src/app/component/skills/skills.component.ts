import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: any

  constructor(private profileService:AppService) { }

    ngOnInit() {
      this.skills =  this.profileService.skills()
    }

}
