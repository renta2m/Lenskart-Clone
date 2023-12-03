import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { UtilityService } from 'src/app/services/utility.service';
import { Validator } from 'src/app/services/validator';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  prodId?: number;
  product?: Product;
  productForm = this.formBuilder.group({
    id: [''],
    name: ['', Validators.required],
    brand: ['', Validators.required],
    category: ['', Validators.required],
    price: [0, Validators.required],
    details: ['', Validators.required],
    frameColor: ['', Validators.required],
    frameShape: ['', Validators.required],
    frameSize: ['', [Validators.required]],
    frameType: ['', Validators.required],
    }, {
    validators:
      [Validator.passwordValidator()]
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute,
    private productService: ProductService, public utilService: UtilityService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.prodId = Number(params.get('productId'));
      // get product details to edit i.e when user id is present in url
      if (this.prodId) {
        this.productService.getProductById(this.prodId).subscribe({
          next: ((respose: Product) => {
            this.product = respose;
            this.updateFormContent(this.product);
          }),
          error: (err: HttpErrorResponse) => {
            this.utilService.error(err.error.message, 'ok');
          }
        });
      }
    });
  }

  // save product details from form
  saveProduct() {
    const product: Product = {};
    product.name = this.productForm.get('name')?.value || '';
    product.brand = this.productForm.get('brand')?.value || '';
    product.category = this.productForm.get('category')?.value || '';
    product.price = this.productForm.get('price')?.value || 0;
    product.details = this.productForm.get('details')?.value || '';
    product.frameShape = this.productForm.get('frameShape')?.value || '';
    product.frameColor = this.productForm.get('frameColor')?.value?.toString() || '';
    product.frameSize = this.productForm.get('frameSize')?.value || '';
    product.frameType = this.productForm.get('frameType')?.value || '';

    if (this.product?.id) {
      product.id = this.product?.id;
    }

    //service call to product api
    this.productService.saveProduct(product).subscribe({
      next: (() => {
        if (this.product?.id) {
          this.utilService.success("product updated", "ok"); 
        } else {
          this.utilService.success("product created", "ok");
        }
        this.utilService.refreshPage(this.router, this.route);
      }),
      error: (err: HttpErrorResponse) => {
        this.utilService.error(err.error.message, 'ok');
      }
    });
  }

  // set the data to form for editing
  updateFormContent(product: Product) {
    this.productForm.get('id')?.setValue(product.id as unknown as string);
    this.productForm.get('name')?.setValue(product.name!);
    this.productForm.get('brand')?.setValue(product.brand!);
    this.productForm.get('category')?.setValue(product.category!);
    this.productForm.get('price')?.setValue(product.price!);
    this.productForm.get('details')?.setValue(product.details!);
    this.productForm.get('frameColor')?.setValue(product.frameColor!);
    this.productForm.get('frameShape')?.setValue(product.frameShape!);
    this.productForm.get('frameSize')?.setValue(product.frameSize!);
    this.productForm.get('frameType')?.setValue(product.frameType!);

    this.productForm?.markAllAsTouched();
  }
}
