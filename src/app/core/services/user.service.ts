import { Injectable } from '@angular/core';
import { Repository } from 'src/app/shared/models/repo';
import { user } from 'src/app/shared/models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  public user: user = {
    login: '',
  };
  public repositories: Repository[] = [];
  public loading: boolean = false;

  constructor(private router: Router) {}

  reset() {
    this.user = {
      login: '',
    };
    this.repositories = [];
    this.loading = false;
  }

  existUser() {
    return this.user.login != '' ? true : false;
  }

  existRepository() {
    return this.repositories[0].owner.login != '' ? true : false;
  }
}
