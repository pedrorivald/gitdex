import { ReposService } from './../../../core/services/repos.service';
import { UserService } from './../../../core/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-repos',
  templateUrl: './list-repos.component.html',
  styleUrls: ['./list-repos.component.scss']
})
export class ListReposComponent implements OnInit {

  constructor(public userService: UserService, public reposService: ReposService) { }

  ngOnInit(): void {
  }

}
