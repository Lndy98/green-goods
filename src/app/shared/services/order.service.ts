import { Injectable } from '@angular/core';
import { Order } from '../models/Order';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { orderBy } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  collectionName='Carts'

  constructor(private afs: AngularFirestore) { }

  createCart(cart: Order){
      return this.afs.collection<Order>(this.collectionName).add(cart);
  }
  getShoppingCart(id: string){
      return this.afs.collection<Order>(this.collectionName, o => o.where('user', '==', id)).valueChanges();
  }
  
}
