import { ReposService } from './../../../core/services/repos.service';
import { UserService } from './../../../core/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(public userService: UserService, public reposService: ReposService) { }

  ngOnInit(): void {
  }

}
