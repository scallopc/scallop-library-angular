import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string = 'Button label';
  @Input() size: string = 'medium';
  @Input() type: string = 'primary';
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();
  @Input() iconRight: string = '';
  @Input() iconLeft: string = '';
  @Input() disabled: boolean = false;

  constructor() {}

  ngOnInit(): void {
    ///console.log('button');
  }

  handleClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
