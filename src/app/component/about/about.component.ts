import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit{
  aboutData:any
  constructor(private profileService:AppService) { }

    ngOnInit() {
      this.aboutData =  this.profileService.about();
    }
}