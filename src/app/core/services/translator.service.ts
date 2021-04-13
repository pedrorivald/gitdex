import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor(private translate: TranslateService) { }

  get(key: string) {
    return this.translate.instant(key);
  }
}
