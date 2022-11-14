import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Shop', url: '/product-by-category', icon: 'shop' },
    { title: 'Cart', url: '/cart', icon: 'cart' },
    { title: 'Checkout', url: '/checkout', icon: 'chekout' },
    { title: 'Login', url: '/login', icon: 'login' },
    { title: 'Sign Up', url: '/signup', icon: 'singup' },
    { title: 'Search', url: '/search', icon: 'search' },
    { title: 'Product Detail', url: '/product-deatil', icon: 'search' },
  ];
 
  constructor() {}
}
