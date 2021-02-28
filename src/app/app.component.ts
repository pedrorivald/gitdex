import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myForm: FormGroup = new FormGroup({
    user: new FormControl(),
  });

  constructor(
    public userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.onEnter();
  }

  onEnter() {
    this.userService.onEnter();
    this.router.navigate(['/user', this.myForm.value.user]);
  }
}
