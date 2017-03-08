import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'about',
    template:
    `<h1>{{ title }}</h1>
     <p>{{ body }}</p>

     <hr>
     <div></div>`,
})
export class AboutComponent implements OnInit {
    title: string = 'About';
    body: string = 'This is the about page body';

    constructor() {}

    ngOnInit() {}
}