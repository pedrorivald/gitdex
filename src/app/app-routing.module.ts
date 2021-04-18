import { HomeComponent } from './shared/components/home/home.component';
import { ListFollowingComponent } from './shared/components/list-following/list-following.component';
import { ListFollowersComponent } from './shared/components/list-followers/list-followers.component';
import { HomeUserComponent } from './core/components/home-user/home-user.component';
import { HomeNoUserComponent } from './core/components/home-no-user/home-no-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user/:login', component: HomeUserComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'followers', component: ListFollowersComponent },
      { path: 'following', component: ListFollowingComponent }
    ]
  },
  { path: 'user', component: HomeNoUserComponent },
  { path: '', component: HomeNoUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
