import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'blogs',
    template: 
    `<h1>
      {{ title }}
     </h1>
     <p>
      {{ body }}
     </p>

     <hr>
     <div></div>`
})
export class BlogsComponent implements OnInit {
    title: string = 'Blogs';
    body: string = 'This is the blogs page body';

    constructor() {}

    ngOnInit() {}
}