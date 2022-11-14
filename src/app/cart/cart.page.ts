import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Shop', url: '/product-by-category', icon: 'shop' },
    { title: 'Cart', url: '/cart', icon: 'cart' },
    { title: 'Checkout', url: '/checkout', icon: 'chekout' },
    { title: 'Login', url: '/login', icon: 'login' },
    { title: 'Search', url: '/search', icon: 'search' },
  ];
  cartItems: any[] = [];
  total: any;
  showEmptyCartMessage: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
