import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Name', 'Brand', 'Category', 'Price', 'Details',
                                'Frame Color', 'Frame Shape', 'Frame Type', 'Frame Size'];
  dataSource: MatTableDataSource<Product>;

  constructor(private productService: ProductService) { 
    this.dataSource = new MatTableDataSource([{}]);

  }

  ngOnInit(): void {
      this.productService.getAllProducts().subscribe({
        next: ((respose: Product[]) => {
          this.dataSource.data = respose;
        }),
        error: (err: HttpErrorResponse) => {
          console.log(err.error.message);
        }
      });
  }
}
