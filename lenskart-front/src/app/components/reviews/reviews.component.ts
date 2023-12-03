import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Review } from 'src/app/models/review.model';
import { ReviewService } from 'src/app/services/review.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  reviewDisplayedColumns: string[] = ['Customer', 'Date Posted', 'Rating', 'Review'];
  reviewDataSource: MatTableDataSource<Review>;

  constructor(private reviewService: ReviewService, private utilService: UtilityService,
    public dialogRef: MatDialogRef<ReviewsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,) {
    this.reviewDataSource = new MatTableDataSource([{}]);
  }

  ngAfterViewInit() {
    this.reviewDataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.reviewService.getReviewsByProduct(this.data).subscribe({
      next: (response: Review[]) => {
        this.reviewDataSource.data = response;
      },
      error: (err: HttpErrorResponse) => {
        this.utilService.error(err.error.message, 'ok');
      }
    });
  }

}
