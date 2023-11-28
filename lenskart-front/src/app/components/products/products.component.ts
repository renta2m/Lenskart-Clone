import { Component, OnInit } from '@angular/core';
import { Order, OrderItem } from 'src/app/models/order.model';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      name: "lens",
      details: "hello",
      price: 20
    },
    {
      name: "lens",
      details: "hello",
      price: 20
    }
  ];

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
  buyNow(product: Product) {

  }

  addToCart(product: Product) {
    let cartItems: Map<number, {product: Product, quantity: number}> = new Map();
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      cartItems = new Map(JSON.parse(storedCartItems));
    }

    if (cartItems?.has(product.id!)) {
      let item: OrderItem = cartItems.get(product.id!) as OrderItem;
      item.quantity! += 1;
      cartItems.set(product.id!, { product: product, quantity: item.quantity!})
    } else {
      cartItems.set(product.id!, {product, quantity:1});
    }

    localStorage.setItem('cartItems', JSON.stringify([...cartItems]));
  }
}
