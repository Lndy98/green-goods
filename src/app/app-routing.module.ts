import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
{ path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },
{ path: 'mypage', loadChildren: () => import('./pages/mypage/mypage.module').then(m => m.MypageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
