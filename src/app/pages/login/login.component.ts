import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service'
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signUpForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
  });
  

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value).then(cred=>{
      console.log(cred)
      this.router.navigateByUrl('/home');
    }).catch(error=>{
      console.error(error);
    })
  }
}
