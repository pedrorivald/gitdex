import { NavigateService } from './../../services/navigate.service';
import { TranslatorService } from './../../services/translator.service';
import { VoicesService } from './../../services/voices.service';
import { ReposService } from '../../services/repos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { user } from 'src/app/shared/models/user';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss'],
})
export class HomeUserComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  loginUser: string = '';
  subscription!: Subscription;

  public link = ``;

  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    public reposService: ReposService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public voicesService: VoicesService,
    private translator: TranslatorService,
    private navigateService: NavigateService
  ) {}

  ngOnInit(): void {
    this.reset();
    this.voicesService.getVoices();
    this.getUser();
  }

  reset() {
    this.userService.reset();
    this.reposService.reset();
    this.voicesService.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openQRCode() {
    this.dialog.open(QrcodeDialog);
  }

  copyLink() {
    this._snackBar.open(this.translator.get('SNACKBAR.COPIED'), 'X', {
      duration: 1500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['custom-class'],
    });
  }

  getUser() {
    this.userService.loading = true;

    this.subscription = this.route.params.subscribe((params: any) => {
      this.loginUser = params['login'] || '';
      this.userService.getUser(this.loginUser).subscribe((data: user) => {
        this.userService.loading = false;
        this.userService.user = data;
        if (!this.userService.existUser()) {
          this.navigateService.navigateToHomeNoUser();
        } else {
          this.userService.getStars(this.userService.user.login);
          this.link = `https://gitdex.vercel.app/user/${this.userService.user.login}`;
          this.setTitle(`${this.userService.user.name}`);
          this.getStars();
        }
      });
    });
  }

  getStars() {
    this.userService.getStars(this.userService.user.login).subscribe((data: any) => {
      this.userService.totalStars = data.length;
    });
  }

  setTitle(name: string) {
    name != 'null' ? (window.document.getElementsByTagName('title')[0].innerHTML = `GitDex | ${name}`)
      : window.document.getElementsByTagName('title')[0].innerHTML = `GitDex`;
  }
}

@Component({
  selector: 'qrcode-dialog',
  templateUrl: './qrcode.html',
  styleUrls: ['./qrcode.scss'],
})
export class QrcodeDialog {}
