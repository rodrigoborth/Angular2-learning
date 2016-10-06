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