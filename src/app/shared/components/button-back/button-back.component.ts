import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-back',
  templateUrl: './button-back.component.html',
  styleUrls: ['./button-back.component.scss']
})
export class ButtonBackComponent implements OnInit {

  constructor() { }

  changeColor = false;

  ngOnInit(): void {
    window.onscroll = () => this.withUserOnTop();
  }

  withUserOnTop() {
    let toTop = document.getElementById('with-user')?.getBoundingClientRect().top || 100;
    this.changeColor = (this.getDarkmode() == 'false' && toTop < 10);
  }

  getDarkmode(): string {
    const darkmode = window.localStorage.getItem('darkmode');
    return darkmode == null ? '' : darkmode;
  }

}
