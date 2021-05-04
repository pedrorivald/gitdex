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
    window.document.getElementsByTagName('title')[0].innerHTML = `GitDex`;
    this.router.navigate(['']);
  }
}
