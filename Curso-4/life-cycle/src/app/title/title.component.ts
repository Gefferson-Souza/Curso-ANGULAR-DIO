import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() nome: string = 'SERÁ QUE É LOUCO MESMO????';
  constructor() {
    console.log(`"CONSTRUCTOR" ${this.nome}`)
  }

  ngOnChanges(): void {
    console.log(`"OnChanges" ${this.nome}`)
  }

  ngOnInit(): void {
    this.nome += 'x';
    console.log(`"OnInit" ${this.nome}`)
  }

}
