import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../shared/services/cart.service';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';
import { Product } from '../../shared/models/Product';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss']
})
export class MypageComponent implements OnInit {

  actualUser?: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const uid = JSON.parse(localStorage.getItem('user') as string);
    this.userService.getById(uid).subscribe(data => {
      this.actualUser = data;
    }, error => {
      console.error(error);
    });
    
  }

}
