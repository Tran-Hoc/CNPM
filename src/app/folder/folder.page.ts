import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Shop', url: '/product-by-category', icon: 'shop' },
    { title: 'Cart', url: '/cart', icon: 'cart' },
    { title: 'Checkout', url: '/checkout', icon: 'chekout' },
    { title: 'Login', url: '/login', icon: 'login' },
    { title: 'Search', url: '/search', icon: 'search' },
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
