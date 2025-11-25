import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ImportsModule } from './imports';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'flex-component',
  templateUrl: 'flex-component.html',
  styleUrls: ['flex-component.scss'],
  standalone: true,
  imports: [ImportsModule, CommonModule],
})
export class FlexComponent {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() dialogShow = new EventEmitter<void>();
  
  @Input() products: any[] = [];

  onHide() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  onDialogShow() {
    console.log('[FlexComponent] Dialog shown, triggering content initialization');
    this.dialogShow.emit();
  }
}
