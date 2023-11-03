import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'life-cycle';
  isAliveCheckSample: boolean = true;
  deleteLabel: string = 'APAGAR COMPONENTE'

  constructor() { }
  getLive(): void {
    this.isAliveCheckSample = (this.isAliveCheckSample ? false : true);
    this.deleteLabel = (this.isAliveCheckSample ? 'APAGAR COMPONENTE' : 'CRIAR COMPONENTE');
  }
}
