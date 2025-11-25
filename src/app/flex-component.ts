import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ImportsModule } from './imports';
import { TableCheckboxSelectionDemo } from './table-checkbox-selection-demo';
import { Product } from '@domain/product';
import { CommonModule } from '@angular/common';

interface ColumnDefinition {
  field: string;
  header: string;
  sortOrder: string;
  sortColumn: string;
}

@Component({
  selector: 'flex-component',
  templateUrl: 'flex-component.html',
  styleUrls: ['flex-component.scss'],
  standalone: true,
  imports: [ImportsModule, TableCheckboxSelectionDemo, CommonModule],
})
export class FlexComponent {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  
  @Input() products: Product[] = [];
  @Input() selectedProducts: Product[] = [];
  @Output() selectedProductsChange = new EventEmitter<Product[]>();
  
  @Input() columnDefinition: ColumnDefinition[] = [];

  onHide() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  onSelectionChange(selection: Product[]) {
    this.selectedProductsChange.emit(selection);
  }
}
