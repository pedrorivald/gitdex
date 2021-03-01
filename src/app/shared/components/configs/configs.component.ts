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

      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/pt-br|en/) ? browserLang : 'pt-br');
  }

  ngOnInit() {}

  toggle() {
    window.document.body.classList.toggle('dark');
  }

}
