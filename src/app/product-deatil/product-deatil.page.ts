import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-deatil',
  templateUrl: './product-deatil.page.html',
  styleUrls: ['./product-deatil.page.scss'],
})
export class ProductDeatilPage implements OnInit {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Shop', url: '/product-by-category', icon: 'shop' },
    { title: 'Cart', url: '/cart', icon: 'cart' },
    { title: 'Checkout', url: '/checkout', icon: 'chekout' },
    { title: 'Login', url: '/login', icon: 'login' },
    { title: 'Search', url: '/search', icon: 'search' },
  ];
  product: any;
  WooCommerce: any;
  reviews: any[] = [];
  selectedOptions: any = {};
  requireOptions: boolean = true;
  productVariations: any[] = [];
  productPrice: number = 0.0;
  selectedVariation: any;

  constructor() { }

  ngOnInit() {
  }

}
