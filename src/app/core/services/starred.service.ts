import { UserService } from 'src/app/core/services/user.service';
import { Repository } from 'src/app/shared/models/repo';
import { GithubService } from './github.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarredService {

  listStarred: Repository[] = [];
  totalStarred: Repository[] = [];
  reposPerPage = 9;
  loading: boolean = false;
  pageStarred = 0;

  constructor(private githubService: GithubService, private userService: UserService) { }

  getStarredPerPage(page_: number = 0) {
    let page = Math.ceil(this.listStarred.length / this.reposPerPage) + 1;

    if(this.pageStarred != page) {
      this.pageStarred = page;
    } else { return; }

    if(page_) {
      this.listStarred = [];
      this.pageStarred = page_;
    }

    this.loading = true;
    this.githubService.getStarredPerPage(this.userService.user.login, this.pageStarred, this.reposPerPage)
      .subscribe((starred) => {
        this.listStarred = this.listStarred.concat(starred);
        this.loading = false;
    });
  }

  getStarred() {
    this.githubService.getStars(this.userService.user.login).subscribe((starred) => {
      this.totalStarred = starred;
    });
  }

  reset() {
    this.listStarred = [];
    this.totalStarred = [];
  }
}
