import { Repository } from './../../models/repo';
import { ReposService } from './../../../core/services/repos.service';
import { UserService } from './../../../core/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-repos',
  templateUrl: './list-repos.component.html',
  styleUrls: ['./list-repos.component.scss'],
})
export class ListReposComponent implements OnInit {
  itemsPerPage: number = 6;

  repos: Repository[] = [];
  sum = 9;
  throttle = 50;
  scrollDistance = 1;

  constructor( public userService: UserService, public reposService: ReposService) {}

  ngOnInit(): void {}

  onScrollDown() {
    console.log("scrolled down!");
    this.reposService.getReposPerPage();
  }
}
