import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.scss'],
})
export class ConfigsComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  toggle() {
    window.document.body.classList.toggle('dark');
  }

}
