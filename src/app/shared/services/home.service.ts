import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  collectionNameImg = 'Images';
  collectionNameProduct = 'Products'

  constructor(private http: HttpClient, private afs: AngularFirestore, private storage: AngularFireStorage ) { }

  loadProduct(): Observable<Array<Product>>{
    return this.afs.collection<Product>(this.collectionNameProduct).valueChanges();
  }
  
  loadImage(imageUrl: string) {
    return this.storage.ref(imageUrl).getDownloadURL();
  }
}
