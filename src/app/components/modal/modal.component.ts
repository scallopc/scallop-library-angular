import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() openModal: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  close() {
    const modal: any = document.querySelector('.overlay');
    this.closeModalEvent.emit();
  }

  preventClose(event: Event) {
    event.stopPropagation();
  }
}
