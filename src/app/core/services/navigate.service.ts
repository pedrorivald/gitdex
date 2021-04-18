import { ReposService } from './repos.service';
import { VoicesService } from 'src/app/core/services/voices.service';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  navigateToHomeUser() {
    this.router.navigate([`/user/${this.userService.user.login}`]);
  }

  navigateToHomeNoUser() {
    this.router.navigate(['']);
  }
}
