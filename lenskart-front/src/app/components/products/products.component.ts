
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products.map(product => {
        const randomIndex = Math.floor(Math.random() * 7) + 1;
        if (randomIndex >= 1 && randomIndex <= 6) {
          product.imagePath = `assets/image${randomIndex}.jpg`;
        } else {
          product.imagePath = 'assets/image1.jpg'; 
        }

        return product;
      });
    });
  }

  addToCart(product: Product): void {
    console.log('Added to cart:', product);
  }
}
