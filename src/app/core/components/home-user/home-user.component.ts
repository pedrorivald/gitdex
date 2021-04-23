import { ActivatedRoute } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { StarredService } from './../../services/starred.service';
import { TranslatorService } from './../../services/translator.service';
import { VoicesService } from './../../services/voices.service';
import { ReposService } from '../../services/repos.service';
import { Component, OnInit } from '@angular/core';
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

  constructor(
    public userService: UserService,
    public reposService: ReposService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public voicesService: VoicesService,
    private translator: TranslatorService,
    public starredService: StarredService,
    private loginService: LoginService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reset();
    this.voicesService.getVoices();
    this.route.params.subscribe((params: any) => {
      this.loginService.login(params['login'] || '');
    });
  }

  reset() {
    this.userService.reset();
    this.reposService.reset();
    this.voicesService.reset();
    this.starredService.reset();
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
}

@Component({
  selector: 'qrcode-dialog',
  templateUrl: './qrcode.html',
  styleUrls: ['./qrcode.scss'],
})
export class QrcodeDialog {}
