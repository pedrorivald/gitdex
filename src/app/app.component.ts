import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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
    public translate: TranslateService
  ) {
    translate.addLangs(['pt-br', 'en']);
    translate.setDefaultLang('pt-br');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/pt-br|en/) ? browserLang : 'pt-br');
  }

  ngOnInit() {
    this.userService.onEnter();
  }

  onEnter() {
    this.userService.onEnter();
    this.router.navigate(['/user', this.myForm.value.user]);
  }
}
