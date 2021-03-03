import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { empty, Observable } from 'rxjs';
import { Repository } from 'src/app/shared/models/repo';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  repos: Observable<Repository[]> = empty();
  listRepo: Repository[] = [];
  loading: boolean = false;
  public showReposBoolean: boolean = false;
  public currentPage = 1;

  constructor(private userService: UserService) { }

  public showRepos() {
    this.showReposBoolean = !this.showReposBoolean;
    this.loading = true;
    this.repos = this.userService.getRepos(
      this.userService.user.login
    );
    this.repos.subscribe((repos) => {
      this.listRepo = repos;
      this.loading = false;
    });
  }

  reset() {
    this.repos = empty();
    this.listRepo = [];
    this.showReposBoolean = false;
    this.currentPage = 1;
  }
}
