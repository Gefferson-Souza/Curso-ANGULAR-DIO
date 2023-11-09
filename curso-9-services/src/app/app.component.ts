import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Aula de services</h1>
  <app-card></app-card>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso-9-services';
}
