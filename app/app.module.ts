import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from './app.component';
import { HomeComponent }  from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';

const appRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blogs', component: BlogsComponent }
];

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ 
    AppComponent, 
    HomeComponent,
    AboutComponent,
    BlogsComponent
  ],
  imports: [ 
    BrowserModule, 
    RouterModule.forRoot(appRoutes) 
  ],
  providers: []
})
export class AppModule { }
