import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() altText: string;
  @Input() size: string = 'small';
  showInitials: boolean = false;
  loading: boolean = true;
  @Input() customClass: any = '';

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
    const initials = this.getInitials();
    const hash = initials.charCodeAt(0) + initials.charCodeAt(1); // Cálculo simples com base nas iniciais
    const hue = hash % 360; // Limitando a cor entre 0 e 359 (valores válidos de matiz)
    return `hsl(${hue}, 70%, 60%)`; // Definindo a cor de fundo com base na matiz calculada
  }
}
