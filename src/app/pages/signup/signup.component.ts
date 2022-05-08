import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/user'
import { UserService } from '../../shared/services/user.service';
import { CartService } from '../../shared/services/cart.service';
import { Cart } from '../../shared/models/Cart';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    phoneNumber: new FormControl(''),
    name: new FormGroup({
      lastname: new FormControl(''),
      firstname: new FormControl('')
    }),
    address: new FormGroup({
      ZIPcode: new FormControl(''),
      town: new FormControl(''),
      street: new FormControl(''),
      houseNumber: new FormControl('')
    })
  });

  constructor(private location: Location,
     private router: Router,private authService: AuthService,
      private userService: UserService, private cartService: CartService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.signUpForm.get('password')?.value == this.signUpForm.get('rePassword')?.value){
      this.authService.signup(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value).then(cred=>{
            const user : User = {
              id: cred.user?.uid as string,
              email: this.signUpForm.get('email')?.value,
              phoneNumber: this.signUpForm.get('phoneNumber')?.value,
              name:{
                lastname: this.signUpForm.get('name.lastname')?.value,
                firstname: this.signUpForm.get('name.firstname')?.value
              },
              address:{
                ZIPcode: this.signUpForm.get('address.ZIPcode')?.value,
                town: this.signUpForm.get('address.town')?.value,
                street: this.signUpForm.get('address.street')?.value,
                houseNumber: this.signUpForm.get('address.houseNumber')?.value
              }
            };
            this.userService.create(user).then(_=>{
              const cart : Cart = {
                userId: user.id,
                productsId: [],
                price: 0,
              }
              this.cartService.createShoppingCart(cart).then(_=>{
                  this.router.navigateByUrl('/home');
                }).catch(error=>{
                  console.error(error);
                })
            }).catch(error=>{
              console.error(error);
            })
      }).catch(error=>{
        console.error(error);
      })
    } else{
      console.log("Nem egyeznek meg a jelszavak");
    };
  }

  goBack() {
    this.location.back();
  }

}
