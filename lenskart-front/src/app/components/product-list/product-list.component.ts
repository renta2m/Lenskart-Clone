import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Review } from 'src/app/models/review.model';
import { ProductService } from 'src/app/services/product.service';
import { ReviewsComponent } from '../reviews/reviews.component';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['ID', 'Name', 'Brand', 'Category', 'Price', 'Details',
                                'Frame Color', 'Frame Shape', 'Frame Type', 'Frame Size', 'Actions'];
  dataSource: MatTableDataSource<Product>;

  constructor(private productService: ProductService, private router: Router, private dialog: MatDialog,
    private utilService: UtilityService) { 
    this.dataSource = new MatTableDataSource([{}]);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
      this.productService.getAllProducts().subscribe({
        next: ((respose: Product[]) => {
          this.dataSource.data = respose;
        }),
        error: (err: HttpErrorResponse) => {
        this.utilService.error(err.error.message, 'ok');
        }
      });
  }

  editProduct(productId: number) {
    this.router.navigate([`edit-product/${productId}`]);
  }

  viewReviews(id:number): void {
    this.dialog.open(ReviewsComponent, {
      width: '75%',
      data: id,
    });
  }
}
