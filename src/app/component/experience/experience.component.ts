import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

workexp: any

  constructor(private profileService:AppService) { }

    ngOnInit() {
      this.workexp =  this.profileService.exprience();
    }
}
