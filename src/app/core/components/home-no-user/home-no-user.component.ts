import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home-no-user',
  templateUrl: './home-no-user.component.html',
  styleUrls: ['./home-no-user.component.scss']
})
export class HomeNoUserComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
