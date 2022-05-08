import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  collectionName = 'Products';

  constructor(private afs: AngularFirestore) { }

  getProductById(id: string){
    return this.afs.collection<Product>(this.collectionName).doc(id).valueChanges();
  }
}
