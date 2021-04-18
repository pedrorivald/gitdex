import { Follow } from './../../shared/models/follow';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  followPerPage = 8;
  listFollowers: Follow[] = [];
  listFollowing: Follow[] = [];
  loading: boolean = false;
  public currentPage = 1;

  constructor(private userService: UserService) { }

  getFollowersPerPage() {
    let page = Math.ceil(this.listFollowers.length / this.followPerPage) + 1;
    this.loading = true;
    this.userService.getFollowersPerPage(this.userService.user.login, page, this.followPerPage)
      .subscribe((follow) => {
        this.listFollowers = this.listFollowers.concat(follow);
        this.loading = false;
      });
  }

  getFollowingPerPage() {
    let page = Math.ceil(this.listFollowing.length / this.followPerPage) + 1;
    this.loading = true;
    this.userService.getFollowingPerPage(this.userService.user.login, page, this.followPerPage)
      .subscribe((follow) => {
        this.listFollowing = this.listFollowing.concat(follow);
        this.loading = false;
    });
  }
}
