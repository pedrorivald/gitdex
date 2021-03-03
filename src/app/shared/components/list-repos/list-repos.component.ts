import { ReposService } from './../../../core/services/repos.service';
import { UserService } from './../../../core/services/user.service';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-list-repos',
  templateUrl: './list-repos.component.html',
  styleUrls: ['./list-repos.component.scss'],
})
export class ListReposComponent implements OnInit {
  itemsPerPage: number = 6;

  constructor(
    public userService: UserService,
    public reposService: ReposService
  ) {}

  ngOnInit(): void {}
}
