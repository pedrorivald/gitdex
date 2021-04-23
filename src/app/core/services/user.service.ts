import { Injectable } from '@angular/core';
import { Repository } from 'src/app/shared/models/repo';
import { user } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: user = {
    login: '',
  };
  public repositories: Repository[] = [];
  public loading: boolean = false;
  public linkUser = '';

  constructor() {}

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
