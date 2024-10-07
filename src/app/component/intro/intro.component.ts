import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  cvUrl: any
  constructor(private profileService:AppService,public router:Router ) { }

  ngOnInit() {

    this.cvUrl =  this.profileService.resumeurl
  }

  btnClick=  () => {
    this.router.navigateByUrl('/contact');
};
}
