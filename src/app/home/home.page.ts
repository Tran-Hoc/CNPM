import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  products: any[];
  moreProducts: any[];
  page: number;
  searchQuery: string = "";
  constructor() { }

  ngOnInit() {
  }

  loadMoreProducts(event){
    // console.log(event);
    // if(event == null)
    // {
    //   this.page = 2;
    //   this.moreProducts = [];
    // }
    // else
    //   this.page++;

    // this.WooCommerce.getAsync("products?page=" + this.page).then( (data) => {
    //   console.log(JSON.parse(data.body));
    //   this.moreProducts = this.moreProducts.concat(JSON.parse(data.body).products);

    //   if(event != null)
    //   {
    //     event.complete();
    //   }

    //   if(JSON.parse(data.body).products.length < 10){
    //     event.enable(false);

    //     this.toastCtrl.create({
    //       message: "No more products!",
    //       duration: 5000
    //     }).present();

    //   }


    // }, (err) => {
    //   console.log(err)
    // })
  }

  openProductPage(product){
    // this.navCtrl.push('ProductDetails', {"product": product} );
  }

  onSearch(event){
    // if(this.searchQuery.length > 0){
    //   this.navCtrl.push('SearchPage', {"searchQuery": this.searchQuery});
    // }
  }
}
