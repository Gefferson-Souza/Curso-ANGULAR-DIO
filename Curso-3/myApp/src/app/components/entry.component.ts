import { Component } from '@angular/core';


@Component({
  selector: "entry-data",
  templateUrl: "./entry.component.html",
  styleUrls: ["./entry.component.scss"]
})

export class Entry {
  texto: string = '';
  outroTexto: string = 'abc';
  color:string = 'red'
}

