import { GithubService } from './github.service';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Repository } from 'src/app/shared/models/repo';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  repos: Observable<Repository[]> = EMPTY;
  reposPerPage = 9;
  listRepo: Repository[] = [];
  loading: boolean = false;
  public showReposBoolean: boolean = false;
  public currentPage = 1;

  constructor(private userService: UserService, private githubService: GithubService) { }

  public showRepos() {
    this.listRepo = [];
    this.showReposBoolean = !this.showReposBoolean;
    this.getReposPerPage();
  }

  getRepos() {
    this.loading = true;
    this.repos = this.githubService.getRepos(
      this.userService.user.login
    );
    this.repos.subscribe((repos) => {
      this.listRepo = repos;
      this.loading = false;
    });
  }

  getReposPerPage() {
    let page = Math.ceil(this.listRepo.length / this.reposPerPage) + 1;
    this.loading = true;
    this.repos = this.githubService.getReposPerPage(this.userService.user.login, page, this.reposPerPage);
    this.repos.subscribe((repos) => {
      this.listRepo = this.listRepo.concat(repos);
      this.loading = false;
    });
  }

  reset() {
    this.repos = EMPTY;
    this.listRepo = [];
    this.showReposBoolean = false;
    this.currentPage = 1;
  }
}
