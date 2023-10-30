import { Component, Input } from '@angular/core';


@Component({
  selector: "test-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})

export class Button {
  @Input() label: string ="";
  count: number = 0;
  buttonText: string = 'ACESSAR';
  buttonArray: string[] = ['Primeiro Indice', 'Segundo Indice'];
  testArray: string = '';
}

