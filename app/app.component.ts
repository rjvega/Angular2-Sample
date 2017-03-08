import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [],
  imports: []
})

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: [ './app/app.component.css' ] 
})
export class AppComponent  { name = 'Cool website'; }
