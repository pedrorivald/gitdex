import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {
  constructor(private router: Router) {}

  navigateToHomeUser(user: string) {
    this.router.navigate([`/user/${user}`]);
  }

  navigateToHomeNoUser() {
    this.router.navigate(['']);
  }
}
