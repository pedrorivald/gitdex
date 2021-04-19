import { Follow } from './../../shared/models/follow';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repository } from 'src/app/shared/models/repo';
import { user } from 'src/app/shared/models/user';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  public totalStars: number = 0;
  public user: user = {
    login: '',
  };
  public repositories: Repository[] = [];
  public loading: boolean = false;

  constructor(private router: Router) {}

  reset() {
    this.totalStars = 0;
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
