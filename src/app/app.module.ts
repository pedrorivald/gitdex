import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { QRCodeModule } from 'angularx-qrcode';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';

import { HomeUserComponent, QrcodeDialog } from './core/components/home-user/home-user.component';
import { HomeNoUserComponent } from './core/components/home-no-user/home-no-user.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { ButtonBackComponent } from './shared/components/button-back/button-back.component';
import { ListReposComponent } from './shared/components/list-repos/list-repos.component';
import { ContactsComponent } from './shared/components/contacts/contacts.component';
import { GithubCornerComponent } from './shared/components/github-corner/github-corner.component';
import { QrcodeComponent } from './shared/components/qrcode/qrcode.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeUserComponent,
    HomeNoUserComponent,
    ButtonComponent,
    ButtonBackComponent,
    ListReposComponent,
    ContactsComponent,
    GithubCornerComponent,
    QrcodeComponent,
    QrcodeDialog
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
    NgxPaginationModule,
    QRCodeModule,
    MatDialogModule,
    ClipboardModule,
    MatSnackBarModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
