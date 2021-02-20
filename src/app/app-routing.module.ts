import { HomeComUsuarioComponent } from './core/components/home-com-usuario/home-com-usuario.component';
import { HomeSemUsuarioComponent } from './core/components/home-sem-usuario/home-sem-usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeSemUsuarioComponent },
  { path: 'user', component: HomeComUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
