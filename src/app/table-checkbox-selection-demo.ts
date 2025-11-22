import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ImportsModule } from './imports';
import { Product } from '@domain/product';
import { ProductService } from '@service/productservice';
@Component({
  selector: 'table-checkbox-selection-demo',
  templateUrl: 'table-checkbox-selection-demo.html',
  standalone: true,
  imports: [ImportsModule],
  providers: [ProductService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableCheckboxSelectionDemo implements OnInit {
  products!: Product[];
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

  selectedProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().then((data) => {
      this.products = data;
    });
  }

  // TrackBy function for optimal rendering
  trackByCode(index: number, product: Product): string {
    return product.code || index.toString();
  }
}
