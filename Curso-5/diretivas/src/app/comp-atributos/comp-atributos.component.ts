import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {

  estilo: string = '';
  corFundo: string = 'blue';
  corDaFonte: string = 'red';
  item: string = '';
  listaDeCompras: string[] = [];
  isEnableBlock: boolean = this.listaDeCompras.length >= 1;

  constructor() { }


  ngOnInit(): void {
  }

  onOff(): void {
    this.estilo = (this.estilo === 'enable' ? 'disable' : 'enable');
  }

  adicionarItem(): void {
    this.listaDeCompras.push(this.item);
  }
}
