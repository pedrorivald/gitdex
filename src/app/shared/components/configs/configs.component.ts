import { LanguageService } from './../../../core/services/language.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.scss'],
})
export class ConfigsComponent implements OnInit {
  constructor(public languageService: LanguageService) {
    if (this.getDarkmode() == '') {
      this.setDarkmode('false');
    }

    if (this.getDarkmode() == 'true') {
      window.document.body.classList.toggle('dark');
      this.toggleThemeColor('#09142c');
    }
  }

  ngOnInit() {}

  toggle() {
    if (this.getDarkmode() == 'false') {
      window.document.body.classList.toggle('dark');
      this.setDarkmode('true');
      this.toggleThemeColor('#09142c');
    } else {
      window.document.body.classList.toggle('dark');
      this.setDarkmode('false');
      this.toggleThemeColor('#345292');
    }
  }

  toggleThemeColor(color: string) {
    window.document.querySelector('meta[name="theme-color"]')?.setAttribute("content", color);
  }

  setDarkmode(status: string) {
    window.localStorage.setItem('darkmode', status);
  }

  getDarkmode(): string {
    const darkmode = window.localStorage.getItem('darkmode');
    return darkmode == null ? '' : darkmode;
  }
}
