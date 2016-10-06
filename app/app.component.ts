import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',

  template: `
    <alert type="success">Hello guys!</alert>
    <header-component></header-component>
    <router-outlet></router-outlet>
    <footer-component></footer-component>
  `,
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/