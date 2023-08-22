import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() size: string = 'medium';
  @Input() type: string = 'primary';
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();
  @Input() iconRight: string = '';
  @Input() iconLeft: string = '';

  constructor() {}

  ngOnInit(): void {}

  handleClick(): void {
    this.clicked.emit();
  }
}
