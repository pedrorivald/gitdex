import { GithubService } from './github.service';
import { StarredService } from './starred.service';
import { UserService } from 'src/app/core/services/user.service';
import { Injectable } from '@angular/core';
import { NavigateService } from './navigate.service';
import { environment } from 'src/environments/environment';
import { user } from 'src/app/shared/models/user';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { TranslatorService } from './translator.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    public userService: UserService,
    public starredService: StarredService,
    private githubService: GithubService,
    private navigateService: NavigateService,
    private _snackBar: MatSnackBar,
    private translator: TranslatorService,
  ) {}

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  login(login: string) {
    this.userService.loading = true;
    this.githubService.getUser(login).subscribe((data: user) => {
      this.userService.loading = false;
      this.userService.user = data;
      if (!this.userService.existUser()) {
        this.navigateService.navigateToHomeNoUser();
      } else {
        this.userService.linkUser = `${environment.URL}user/${this.userService.user.login}`;
        this.setTitle(`${this.userService.user.name}`);
        this.starredService.pageTotalStarred = 0;
        this.starredService.getStarred();
      }
    }, (error) => {
      this.userService.loading = false;
      this._snackBar.open(this.translator.get('SNACKBAR.USER-NOT-FOUND'), 'X', {
        duration: 1500,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['custom-class'],
      });
      this.navigateService.navigateToHomeNoUser();
    });
  }

  setTitle(name: string) {
    name != 'null' ? (window.document.getElementsByTagName('title')[0].innerHTML = `GitDex | ${name}`)
      : window.document.getElementsByTagName('title')[0].innerHTML = `GitDex`;
  }
}
