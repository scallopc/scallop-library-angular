import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-page',
  templateUrl: './button-page.component.html',
  styleUrls: ['./button-page.component.scss'],
})
export class ButtonPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onButtonClicked(): void {
    console.log('Botão clicado!');
    // Adicione a lógica do que deseja fazer quando o botão for clicado
  }
}
