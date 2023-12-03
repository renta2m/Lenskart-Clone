import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/models/product.model';
import { Review } from 'src/app/models/review.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  ratingForm = this.formBuilder.group({
    rating: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
    review: ['', Validators.required]
  });

  constructor(
    private dialogRef: MatDialogRef<ReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private formBuilder: FormBuilder
  ) {}

  submit() {
    if (this.ratingForm.valid) {
      this.dialogRef.close(this.prepareReview());
    }
  }

  prepareReview() {
    const review: Review = {};
    review.review = this.ratingForm.get('review')?.value || '';
    review.rating = Number(this.ratingForm.get('rating')?.value) || 5;
    review.customer = { id: Number(localStorage.getItem('id')!) };
    review.product = this.data;
    review.datePosted = new Date();
    review.status = 'ACTIVE';

    return review;
  }

  cancel() {
    this.dialogRef.close();
  }
}
