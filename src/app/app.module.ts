import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import { environment } from 'src/environments/environment';
import { AngularFireModule} from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { MypageModule } from './pages/mypage/mypage.module';
import { SignupModule } from './pages/signup/signup.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HomeModule,
    LoginModule,
    MypageModule,
    SignupModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
