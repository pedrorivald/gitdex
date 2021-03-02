import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.scss'],
})
export class ConfigsComponent implements OnInit {

  constructor(public translate: TranslateService) {
      translate.addLangs(['pt-br', 'en']);
      translate.setDefaultLang('pt-br');
      this.setLanguage(this.getLanguage());
  }

  ngOnInit() {}

  getLanguage(): string {
    const lang = window.localStorage.getItem('lang');
    return lang == null ? 'pt-br' : lang;
  }

  setLanguage(lang: string) {
    window.localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }

  toggle() {
    window.document.body.classList.toggle('dark');
  }

}
