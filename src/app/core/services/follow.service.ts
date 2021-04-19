import { GithubService } from './github.service';
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
  pageFollowers = 0;
  pageFollowing = 0;

  constructor(private userService: UserService, private githubService: GithubService) { }

  getFollowersPerPage() {
    let page = Math.ceil(this.listFollowers.length / this.followPerPage) + 1;

    if(this.pageFollowers != page) {
      this.pageFollowers = page;
    } else { return; }

    this.loading = true;
    this.githubService.getFollowersPerPage(this.userService.user.login, this.pageFollowers, this.followPerPage)
      .subscribe((follow) => {
        this.listFollowers = this.listFollowers.concat(follow);
        this.loading = false;
      });
  }

  getFollowingPerPage() {
    let page = Math.ceil(this.listFollowing.length / this.followPerPage) + 1;

    if(this.pageFollowing != page) {
      this.pageFollowing = page;
    } else { return; }

    this.loading = true;
    this.githubService.getFollowingPerPage(this.userService.user.login, this.pageFollowing, this.followPerPage)
      .subscribe((follow) => {
        this.listFollowing = this.listFollowing.concat(follow);
        this.loading = false;
    });
  }
}
