import { HomeUserComponent } from './core/components/home-user/home-user.component';
import { HomeNoUserComponent } from './core/components/home-no-user/home-no-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user/:login', component: HomeUserComponent },
  { path: 'user', component: HomeNoUserComponent },
  { path: '', component: HomeNoUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
