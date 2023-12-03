import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Map<number, { product: any, quantity: number }> = new Map();

  constructor() {
    // Retrieve cart items from session storage on service initialization
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = new Map(JSON.parse(storedCartItems));
    }
  }

  private updateLocalStorage(): void {
    localStorage.setItem('cartItems', JSON.stringify([...this.cartItems]));
  }

  addToCart(item: any, quantity: number = 1): Map<number, { product: Product, quantity: number }> {
    if (this.cartItems.has(item.id)) {
      const existingItem = this.cartItems.get(item.id)!;
      existingItem.quantity += quantity;
    } else {
      this.cartItems.set(item.id, { product: item, quantity: quantity });
    }

    this.updateLocalStorage();
    return this.cartItems;
  }

  getCartItems(): Map<number, { product: any, quantity: number }> {
    return new Map(JSON.parse(localStorage.getItem('cartItems')!));
  }

  removeFromCart(productId: number): Map<number, { product: Product, quantity: number }> {
    this.cartItems = this.getCartItems();
    this.cartItems.delete(productId);
    this.updateLocalStorage();
    return this.cartItems;
  }

  clearCart(): Map<number, { product: Product, quantity: number }> {
    this.cartItems.clear();
    this.updateLocalStorage();
    return this.cartItems;
  }

  changeQuantity(productId: number, change: number): Map<number, { product: Product, quantity: number }> {
    this.cartItems = this.getCartItems();
    if (this.cartItems.has(productId)) {
      const item = this.cartItems.get(productId)!;
      item.quantity += change;

      if (item.quantity <= 0) {
        this.cartItems.set(productId, { product: item, quantity:1});
      }
    }

    this.updateLocalStorage();
    return this.cartItems;
  }
}
