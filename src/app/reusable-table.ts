import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ImportsModule } from './imports';

export interface TableColumn {
  field: string;
  header: string;
}

@Component({
  selector: 'reusable-table',
  templateUrl: 'reusable-table.html',
  styleUrls: ['reusable-table.scss'],
  standalone: true,
  imports: [ImportsModule],
})
export class ReusableTable {
  @Input() data: any[] = [];
  @Input() columns: TableColumn[] = [];
  @Input() selectedItems: any[] = [];
  @Output() selectedItemsChange = new EventEmitter<any[]>();
  
  @Input() dataKey: string = 'id';
  @Input() showCheckbox: boolean = true;

  isSelected(rowData: any): boolean {
    return this.selectedItems.some(item => item[this.dataKey] === rowData[this.dataKey]);
  }

  toggleSelection(rowData: any): void {
    const index = this.selectedItems.findIndex(item => item[this.dataKey] === rowData[this.dataKey]);
    
    let newSelection: any[];
    if (index > -1) {
      // Item is selected, remove it
      newSelection = this.selectedItems.filter(item => item[this.dataKey] !== rowData[this.dataKey]);
    } else {
      // Item is not selected, add it
      newSelection = [...this.selectedItems, rowData];
    }
    console.log(newSelection)
    this.selectedItemsChange.emit(newSelection);
  }

  areAllSelected(): boolean {
    return this.data.length > 0 && this.selectedItems.length === this.data.length;
  }

  toggleSelectAll(): void {
    let newSelection: any[];
    if (this.areAllSelected()) {
      // Deselect all
      newSelection = [];
    } else {
      // Select all
      newSelection = [...this.data];
    }
      console.log(newSelection)
    this.selectedItemsChange.emit(newSelection);
  }

  trackByFn(index: number, item: any): any {
    return item[this.dataKey] || index;
  }
}
