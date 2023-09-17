import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-full-modal-mode',
  templateUrl: './full-modal-mode.component.html',
  styleUrls: ['./full-modal-mode.component.scss'],
})
export class FullModalModeComponent implements OnInit {
  @Input() isFullModalOpen: boolean = false;
  @Output() closeFullModalEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  close() {
    const modal: any = document.querySelector('.overlay');
    modal.classList.remove('slide-in-bottom');
    modal.classList.add('slide-out-bottom');
    setTimeout(() => {
      this.closeFullModalEvent.emit();
    }, 500);
  }
}
