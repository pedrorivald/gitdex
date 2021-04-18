import { UserService } from 'src/app/core/services/user.service';
import { NavigateService } from './../../../core/services/navigate.service';
import { Component, OnInit } from '@angular/core';
import { FollowService } from 'src/app/core/services/follow.service';

@Component({
  selector: 'app-list-followers',
  templateUrl: './list-followers.component.html',
  styleUrls: ['./list-followers.component.scss'],
})
export class ListFollowersComponent implements OnInit {
  throttle = 50;
  scrollDistance = 1;

  constructor(
    public followService: FollowService,
    public navigateService: NavigateService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.reset();
    this.followService.getFollowersPerPage();
  }

  reset() {
    this.followService.listFollowers = [];
    this.followService.pageFollowers = 0;
  }

  onScrollDown() {
    this.followService.getFollowersPerPage();
  }
}
