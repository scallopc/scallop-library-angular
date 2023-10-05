import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() imageUrl: string = '';
  @Input() altText: string = '';
  @Input() size: string = 'small';
  showInitials: boolean = false;
  loading: boolean = true;
  @Input() customClass: any = '';
  textStyle: any = '';

  constructor() {}

  ngOnInit(): void {}

  handleImageError() {
    this.loading = false;
    this.showInitials = true;
  }

  handleImageLoad() {
    this.showInitials = false;
    this.loading = false;
  }

  getInitials(): string {
    if (this.altText) {
      const names = this.altText.split(' ');
      if (names.length >= 2) {
        return names[0][0].toUpperCase() + names[1][0].toUpperCase();
      } else if (names.length === 1) {
        return names[0][0].toUpperCase();
      }
    }
    return '';
  }

  getBackgroundColor(): string {
    const randomHue = Math.floor(Math.random() * 360); // Gerar um valor de matiz aleatório entre 0 e 359
    return `hsl(${randomHue}, 70%, 60%)`; // Definindo a cor de fundo com base na matiz aleatória
  }

  getContrastColor(backgroundColor: string): string {
    // Transformar a cor de fundo em RGB
    const rgb = this.hexToRgb(backgroundColor);

    // Calcular a luminosidade da cor de fundo usando a fórmula de luminosidade do W3C
    const luminosity = 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;

    // Definir um valor de referência de luminosidade
    const referenceLuminosity = 128;

    // Se a luminosidade da cor de fundo for maior que o valor de referência, retorne 'black', caso contrário, retorne 'white'
    return luminosity > referenceLuminosity ? 'black' : 'white';
  }

  hexToRgb(hex: string): { r: number; g: number; b: number } {
    // Remove o "#" se estiver presente
    hex = hex.replace(/^#/, '');

    // Converte para um valor numérico hexadecimal
    const num = parseInt(hex, 16);

    // Extraia os valores RGB
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;

    return { r, g, b };
  }
}
