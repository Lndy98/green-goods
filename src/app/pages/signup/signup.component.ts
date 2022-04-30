import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
      firstname: new FormControl(''),
      lastname: new FormControl('')
    }),
    address: new FormGroup({
      ZIPcode: new FormControl(''),
      town: new FormControl(''),
      street: new FormControl(''),
      houseNumber: new FormControl('')
    })
  });

  constructor(private location: Location, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    this.router.navigateByUrl('/login');
  }

  goBack() {
    this.location.back();
  }

}
