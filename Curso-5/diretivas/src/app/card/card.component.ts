import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  produtos: string[] = [];
  private menuType: string = 'azxczxc ';

  constructor() {
    this.produtos = ["Camiseta", "Calça jeans", "Tênis", "Relógio", "Mochila", "Notebook", "Celular", "Óculos de sol", "Perfume", "Câmera digital"];

  }

  ngOnInit(): void {
  }

  adicionar() {
    this.produtos.push('Gefferson')
  }

  excluir() {
    this.produtos.pop();
  }

  remover(index: number) {
    this.produtos.splice(index, 1)
  }

  getMenu():string{
    return this.menuType
  }

}
