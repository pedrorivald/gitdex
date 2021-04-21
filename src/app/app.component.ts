import { VoicesService } from 'src/app/core/services/voices.service';
import { ReposService } from './core/services/repos.service';
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
    private router: Router,
    private reposService: ReposService,
    private voicesService: VoicesService
  ) {}

  reset() {
    this.userService.reset();
    this.reposService.reset();
    this.voicesService.reset();
  }

  ngOnInit() { }

  onEnter() {
    this.reset();
    document.getElementById('user')?.blur();
    this.router.navigate(['/user', this.myForm.value.user]);
  }
}
