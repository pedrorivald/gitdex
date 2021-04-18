import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { VoicesService } from 'src/app/core/services/voices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public userService: UserService, public voicesService: VoicesService) { }

  ngOnInit(): void {}

}
