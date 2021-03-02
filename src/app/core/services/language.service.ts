import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(public translate: TranslateService) {
    translate.addLangs(['pt-br', 'en']);
    translate.setDefaultLang('pt-br');
    this.setLanguage(this.getLanguage());
  }

  getLanguage(): string {
    const lang = window.localStorage.getItem('lang');
    return lang == null ? 'pt-br' : lang;
  }

  setLanguage(lang: string) {
    window.localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }
}
