import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HomeComUsuarioComponent } from './core/components/home-com-usuario/home-com-usuario.component';
import { HomeSemUsuarioComponent } from './core/components/home-sem-usuario/home-sem-usuario.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { ButtonBackComponent } from './shared/components/button-back/button-back.component';
import { ListReposComponent } from './shared/components/list-repos/list-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComUsuarioComponent,
    HomeSemUsuarioComponent,
    ButtonComponent,
    ButtonBackComponent,
    ListReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
