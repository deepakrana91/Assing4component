import { Component, OnInit, ViewEncapsulation } from '@angular/core';

//new component created 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.Native,
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
