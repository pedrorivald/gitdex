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
    private router: Router,
    private route: ActivatedRoute,
    public reposService: ReposService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public voicesService: VoicesService
  ) {}

  ngOnInit(): void {
    this.voicesService.getVoices();
    this.getUser();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openQRCode() {
    this.dialog.open(QrcodeDialog);
  }

  copyLink() {
    this._snackBar.open('Link Copiado!', 'X', {
      duration: 1500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['custom-class'],
    });
  }

  getUser() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.loginUser = params['login'] || '';
      this.userService.getUser(this.loginUser).subscribe((data: user) => {
        this.userService.user = data;
        if (!this.userService.existUser()) {
          this.navigateBack();
        } else {
          this.userService.getStars(this.userService.user.login);
          this.link = `https://gitdex.vercel.app/user/${this.userService.user.login}`;
        }
      });
    });
  }

  navigateBack() {
    this.userService.reset();
    this.reposService.reset();
    this.voicesService.reset();
    this.router.navigate(['']);
  }
}

@Component({
  selector: 'qrcode-dialog',
  templateUrl: './qrcode.html',
  styleUrls: ['./qrcode.scss'],
})
export class QrcodeDialog {}
