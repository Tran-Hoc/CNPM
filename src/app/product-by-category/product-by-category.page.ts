import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.page.html',
  styleUrls: ['./product-by-category.page.scss'],
})
export class ProductByCategoryPage implements OnInit {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Shop', url: '/product-by-category', icon: 'shop' },
    { title: 'Cart', url: '/cart', icon: 'cart' },
    { title: 'Checkout', url: '/checkout', icon: 'chekout' },
    { title: 'Login', url: '/login', icon: 'login' },
    { title: 'Search', url: '/search', icon: 'search' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
