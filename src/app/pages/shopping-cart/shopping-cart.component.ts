import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../../shared/services/product.service';
import { Cart } from '../../shared/models/Cart';
import { Product } from '../../shared/models/Product';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  products?:Array<Product> = [];
  cart?:Cart;
  price?: number = 0;
  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    const uid = JSON.parse(localStorage.getItem('user') as string);
    this.cartService.getShoppingCart(uid).subscribe(data =>{
      this.cart = data;
      console.log(this.cart);
      if( data && data.productsId){
        for(let id of data.productsId){
          this.getProductItem(id);
          console.log(this.products);
        }
      }
       this.sumPrice();
    });
  }

  getProductItem(id:string){
    this.productService.getProductById(id).subscribe((data)=>{
      if(data){
        this.products?.push(data)
      }
    });
  }

  sumPrice(){
    if(this.products){
      for(let pr of this.products){
        if(this.price){
          this.price += pr.price;
        }
      }
    }
  }
}

