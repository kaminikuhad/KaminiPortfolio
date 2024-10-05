import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    // private spinner: NgxSpinnerService
    private scroller: ViewportScroller
  ) { }

  ngOnInit() {
    // this.spinner.show();
    // setTimeout(() => {
    //     this.spinner.hide();
    // }, 2000);
  }

}
