import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { ImportsModule } from './imports';
import { Product } from '@domain/product';
import { ProductService } from '@service/productservice';
import { CommonModule } from '@angular/common';

interface ColumnDefinition {
  field: string;
  header: string;
  sortOrder: string;
  sortColumn: string;
}

@Component({
  selector: 'table-checkbox-selection-demo',
  templateUrl: 'table-checkbox-selection-demo.html',
  styleUrls: ['table-checkbox-selection-demo.scss'],
  standalone: true,
  imports: [ImportsModule, CommonModule],
  providers: [ProductService],
})
export class TableCheckboxSelectionDemo implements OnInit, OnChanges {
  @Input() products: Product[] = [];
  @Input() selectedProducts: Product[] = [];
  @Output() selectedProductsChange = new EventEmitter<Product[]>();
  
  @Input() columnDefinition: ColumnDefinition[] = [
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
    console.log('[Table] ngOnInit - Products:', this.products?.length || 0);
    console.log('[Table] ngOnInit - Selected:', this.selectedProducts?.length || 0);
    
    // Only fetch products if not provided via Input
    if (!this.products || this.products.length === 0) {
      this.productService.getProducts().then((data) => {
        this.products = data;
        console.log('[Table] Products loaded from service:', this.products.length);
        this.cdr.detectChanges();
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['products']) {
      console.log('[Table] Products changed:', this.products?.length || 0);
      this.cdr.detectChanges();
    }
    if (changes['selectedProducts']) {
      console.log('[Table] Selected products changed:', this.selectedProducts?.length || 0);
      this.cdr.detectChanges();
    }
  }

  onSelectionChange(event: any) {
    console.log('[Table] Selection changed:', this.selectedProducts.length);
    this.selectedProductsChange.emit(this.selectedProducts);
    this.cdr.detectChanges();
  }

  // TrackBy function for optimal rendering
  trackByCode(index: number, product: Product): string {
    return product.code || index.toString();
  }
}
