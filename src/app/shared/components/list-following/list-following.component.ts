import { Component, OnInit } from '@angular/core';
import { FollowService } from 'src/app/core/services/follow.service';
import { NavigateService } from 'src/app/core/services/navigate.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-list-following',
  templateUrl: './list-following.component.html',
  styleUrls: ['./list-following.component.scss']
})
export class ListFollowingComponent implements OnInit {

  throttle = 50;
  scrollDistance = 1;

  constructor(
    public followService: FollowService,
    public navigateService: NavigateService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.reset();
    this.followService.getFollowingPerPage();
  }

  reset() {
    this.followService.listFollowing = [];
    this.followService.pageFollowing = 0;
  }

  onScrollDown() {
    this.followService.getFollowingPerPage();
  }

}
