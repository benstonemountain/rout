import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-popup',
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {

  @Output() decision = new EventEmitter<boolean>();

  confirm() {
    this.decision.emit(true);
  }

  cancel() {
    this.decision.emit(false);
  }

}
