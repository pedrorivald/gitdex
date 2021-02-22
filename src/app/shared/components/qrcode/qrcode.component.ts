import { UserService } from './../../../core/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QrcodeComponent implements OnInit {
  public myAngularxQrCode: string = '';

  constructor(private userService: UserService) {
    this.myAngularxQrCode = `https://gitdex.vercel.app/user/${this.userService.user.login}`;
  }

  ngOnInit(): void {}
}
