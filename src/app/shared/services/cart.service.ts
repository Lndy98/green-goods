import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  collectionName='Carts'
  constructor(private afs: AngularFirestore) { }

  createShoppingCart(cart: Cart){
      return this.afs.collection<Cart>(this.collectionName).doc(cart.userId).set(cart);
  }
  getShoppingCart(userId: string){
      return this.afs.collection<Cart>(this.collectionName).doc(userId).valueChanges();
  }
  updateShoppinCart(cart: Cart){
    return this.afs.collection<Cart>(this.collectionName).doc(cart.userId).set(cart);
  }
  updateShoppingCart(userId: string, productId: string, index: number){
    this.getShoppingCart(userId).subscribe(data=>{
      if(data){
        if(data.productsId?.length == index){
          const overRidedCart:Cart= data;
          overRidedCart.productsId?.push(productId)
          console.log( overRidedCart.productsId);
          this.afs.collection<Cart>(this.collectionName).doc(userId).set(overRidedCart);
        }
      }
    })
    return this.getShoppingCart(userId);
  }
}