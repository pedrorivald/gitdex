import { UserService } from './../../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QrcodeComponent implements OnInit {
  public myAngularxQrCode: string = '';

  constructor(private userService: UserService) {
    this.myAngularxQrCode = `${environment.URL}user/${this.userService.user.login}`;
  }

  ngOnInit(): void {}
}
