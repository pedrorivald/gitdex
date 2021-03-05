import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { QRCodeModule } from 'angularx-qrcode';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';

import {
  HomeUserComponent,
  QrcodeDialog,
} from './core/components/home-user/home-user.component';
import { HomeNoUserComponent } from './core/components/home-no-user/home-no-user.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { ButtonBackComponent } from './shared/components/button-back/button-back.component';
import { ListReposComponent } from './shared/components/list-repos/list-repos.component';
import { ContactsComponent } from './shared/components/contacts/contacts.component';
import { GithubCornerComponent } from './shared/components/github-corner/github-corner.component';
import { QrcodeComponent } from './shared/components/qrcode/qrcode.component';
import { ConfigsComponent } from './shared/components/configs/configs.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { environment } from '../environments/environment';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

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
    QrcodeDialog,
    ConfigsComponent,
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
    MatGridListModule,
    MatMenuModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  VAPID_PUBLIC_KEY =
    'BKuvEyR0kNzgO0zrjXH9I666UQzpFVDfwgdnOMyqrs3TLJIAeyDtTyM6Qjvf9KU-QvAjoCPmgAfzDpdxugsqbF0';
  constructor(private pushSw: SwPush, private update: SwUpdate) {
    update.available.subscribe((update) => {
      console.log('Nova versão disponível');
    });

    this.SubscribeToPush();
    pushSw.messages.subscribe((msg) => {
      console.log(JSON.stringify(msg));
    });
  }

  SubscribeToPush() {
    this.pushSw
      .requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY,
      })
      .then((pushSubscription) => {
        console.log(JSON.stringify(pushSubscription));
      })

      .catch((err) => {
        console.error('Ocorreu um erro:' + err);
      });
  }
}
