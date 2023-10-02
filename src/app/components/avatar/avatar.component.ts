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
  textStyle: any = null;

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

  // getBackgroundColor(): string {
  //   const initials = this.getInitials();
  //   const hash = initials.charCodeAt(0) + initials.charCodeAt(1); // Cálculo simples com base nas iniciais
  //   const hue = hash % 360; // Limitando a cor entre 0 e 359 (valores válidos de matiz)
  //   return `hsl(${hue}, 70%, 60%)`; // Definindo a cor de fundo com base na matiz calculada
  // }

  // getBackgroundColor(): string {
  //   const randomHue = Math.floor(Math.random() * 360); // Gerar um valor de matiz aleatório entre 0 e 359
  //   return `hsl(${randomHue}, 70%, 60%)`; // Definindo a cor de fundo com base na matiz aleatória
  // }

  getBackgroundColor(): string {
    const randomHue = Math.floor(Math.random() * 360); // Gerar um valor de matiz aleatório entre 0 e 359
    const randomSaturation = Math.floor(Math.random() * 31) + 70; // Gerar saturação aleatória entre 70% e 100%
    const backgroundColor = `hsl(${randomHue}, ${randomSaturation}%, 60%)`; // Definindo a cor de fundo com base na matiz e saturação aleatórias

    const luminanceThreshold = 0.5; // Limiar de luminância inicial

    // Verificar se a luminância da cor de fundo é menor que o limiar adaptável
    const luminance = this.calculateLuminance(backgroundColor);
    const textColor = luminance < luminanceThreshold ? 'white' : 'black';

    // Aplicar a cor de fundo e a cor do texto
    this.textStyle = {
      'background-color': backgroundColor,
      color: textColor,
    };

    return backgroundColor;
  }

  calculateLuminance(color: string): number {
    const rgb = color.match(/\d+/g);
    if (rgb) {
      const [r, g, b] = rgb.map(Number);

      // Calcular a luminância usando a fórmula de luminância relativa
      return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    }
    return 0;
  }
}
