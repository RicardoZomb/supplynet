import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

const BUTTON_TITLE = 'Ver detalle';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: 'card-wrapper.component.html'
})
export class CardWrapperComponent implements OnInit {
  @Input() public items: any[];
  @Output() public notify: EventEmitter<any> = new EventEmitter<any>();

  public buttonTitle: string;

  constructor() {
    this.buttonTitle = BUTTON_TITLE;
  }

  public ngOnInit(): void {
  }

  public notifyEventClicked(router: string): void {
    this.notify.emit(router);
  }
}
