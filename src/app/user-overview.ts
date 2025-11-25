import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TableCheckboxSelectionDemo } from './table-checkbox-selection-demo';
import { Product } from '@domain/product';
import { ProductService } from '@service/productservice';
import { ImportsModule } from './imports';

@Component({
  selector: 'user-overview',
  templateUrl: 'user-overview.html',
  styleUrls: ['user-overview.scss'],
  standalone: true,
  imports: [TableCheckboxSelectionDemo, ImportsModule],
  providers: [ProductService],
})
export class UserOverview implements OnInit {
  products: Product[] = [];
  displayDialog: boolean = false;
  columnDefinition = [
    {
      field: 'code',
      header: 'Code Name',
      sortOrder: '',
      sortColumn: 'Code',
    },
    {
      field: 'name',
      header: 'Name Name',
      sortOrder: '',
      sortColumn: 'Name',
    },
  ];

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.productService.getProducts().then((data) => {
      this.products = data;
      console.log('Products loaded:', this.products.length);
      this.cdr.markForCheck();
    });
  }

  showDialog() {
    console.log('Opening dialog with products:', this.products.length);
    this.displayDialog = true;
    this.cdr.markForCheck();
  }
}
