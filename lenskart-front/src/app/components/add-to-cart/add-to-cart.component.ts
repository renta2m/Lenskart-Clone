import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit{
  cartItems: Map<number, { product: Product, quantity: number }> = new Map();
  
  constructor(private cartService: CartService, private router: Router, private userService: UserService,
    private utils: UtilityService) { }
  
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeItem(productId: number): void {
    this.cartItems = this.cartService.removeFromCart(productId);
  }

  clearCart(): void {
    this.cartItems = this.cartService.clearCart();
  }

  increaseQuantity(productId: number): void {
    this.cartItems = this.cartService.changeQuantity(productId, 1);
  }

  decreaseQuantity(productId: number): void {
    this.cartItems = this.cartService.changeQuantity(productId, -1);
  }

  getTotal(): number {
    let total = 0;
    for (const item of this.cartItems.values()) {
      total += item.product.price! * item.quantity;
    }
    return Number(total.toFixed(2));
  }

  checkout(): void {
    if (this.userService.isCustomerLoggedIn()) {
    this.router.navigate(['/checkout']);
    } else {
      this.utils.error('you should login/sign up to order','ok');
    }
  }
}
