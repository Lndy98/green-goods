import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './pages/home/home.module';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from 'src/environments/environment';
import { AngularFireModule} from '@angular/fire/compat';
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
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
