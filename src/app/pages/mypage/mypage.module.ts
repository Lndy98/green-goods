import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypageRoutingModule } from './mypage-routing.module';
import { MypageComponent } from './mypage.component';

import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    MypageComponent
  ],
  imports: [
    CommonModule,
    MypageRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
  ]
})
export class MypageModule { }
