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
  pageTotalStarred = 0;
  pageByTotal = 0;
  loadingTotal = false;

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

  getStarred(page = 0) {
    this.loadingTotal = true;
    page++;
    if(this.pageTotalStarred != page){
      this.githubService.getStarredPerPage(this.userService.user.login, page, 100).subscribe((starred) => {
        this.totalStarred = this.totalStarred.concat(starred);
        if(starred.length >= 100) {
          this.pageTotalStarred = page;
          this.getStarred(page);
        }else {
          this.loadingTotal = false;
          this.getStarredPerPageByTotal(1);
        }
      });
    }
  }

  getStarredPerPageByTotal(page_ = 0) {
    if(!page_ && this.pageByTotal == 0) { return; }

    this.loading = false;
    let page = Math.ceil(this.listStarred.length / this.reposPerPage) + 1;
    if(this.pageByTotal != page) {
      this.pageByTotal = page;
    } else { return; }
    let index = this.pageByTotal * this.reposPerPage - this.reposPerPage;
    let newList = [];
    if(page_) {
      this.listStarred = [];
      this.pageByTotal = page_;
      index = 0;
    }
    let lastIndexPage = index + this.reposPerPage;
    for(let i = index; i < lastIndexPage; i++) {
      if(this.totalStarred[i]) { newList.push(this.totalStarred[i]); }
    }
    this.listStarred = this.listStarred.concat(newList);
  }

  reset() {
    this.listStarred = [];
    this.totalStarred = [];
    this.pageStarred = 0;
    this.pageTotalStarred = 0;
    this.pageByTotal = 0;
  }
}
