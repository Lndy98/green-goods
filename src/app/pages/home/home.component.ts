import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { Order } from '../../shared/models/Order';
import { Product } from '../../shared/models/Product';
import { HomeService } from '../../shared/services/home.service';
import { Cart } from '../../shared/models/Cart';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productsObject !: Array<Product>;
  productImage ?: Array<any>;
  isImage : boolean = false;
  user?: string | null;
  actualImage !: any;
  index: number = 0;
  
  constructor(private router: Router, private homeService: HomeService,
     private authService: AuthService, private cartService: CartService) { }

  ngOnInit(): void {
    this.setProduct();
  }
  ngDoCheck() {}

  
  setProduct(){
    this.homeService.loadProduct().subscribe((data: Array<Product>) => {
      console.log(data);
      this.productsObject = data;
      this.setProductImage();

    })
  }
  setProductImage(){
      for(let product of this.productsObject){
        this.getProductImage(product.image_url);
        product.image = this.actualImage;
      }
  }
  

  getProductImage(image_url: string){
    this.homeService.loadImage(image_url).subscribe((data: any)=>{
      this.actualImage = data;
      console.log(this.actualImage);
    });
  }

  addToCart(id: string){
    if(this.authService.isUserLoggedIn()){
      const uid = JSON.parse(localStorage.getItem('user') as string);
      this.cartService.getShoppingCart(uid).subscribe(data=>{
        if(data?.productsId){ this.index = data?.productsId?.length; }
      })
      this.cartService.updateShoppingCart(uid,id,this.index);
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
