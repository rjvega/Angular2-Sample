import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './app/home/home.component.html', 
})
export class HomeComponent implements OnInit {
  title: string = 'Home';
  body: string = 'This is about the home body';

  constructor() {}

ngOnInit() {}
}
