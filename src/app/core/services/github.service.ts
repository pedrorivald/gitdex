import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Follow } from 'src/app/shared/models/follow';
import { Repository } from 'src/app/shared/models/repo';
import { user } from 'src/app/shared/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  getUser(name: string) {
    return this.http.get<user>(`${this.API}users/${name}`)
      .pipe(take(1));
  }

  getRepos(name: string) {
    return this.http.get<Repository[]>(`${this.API}users/${name}/repos`)
      .pipe(take(1));
  }

  getStars(name: string) {
    return this.http.get<any[]>(`${this.API}users/${name}/starred`)
      .pipe(take(1));
  }

  getReposPerPage(name: string, page: number, perPage: number = 9) {
    return this.http.get<Repository[]>
      (`${this.API}users/${name}/repos?sort=updated&page=${page}&per_page=${perPage}`)
        .pipe(take(1));
  }

  getFollowersPerPage(name: string, page: number, perPage: number = 9) {
    return this.http.get<Follow[]>
      (`${this.API}users/${name}/followers?page=${page}&per_page=${perPage}`)
        .pipe(take(1));
  }

  getFollowingPerPage(name: string, page: number, perPage: number = 9) {
    return this.http.get<Follow[]>
      (`${this.API}users/${name}/following?page=${page}&per_page=${perPage}`)
        .pipe(take(1));
  }
}
