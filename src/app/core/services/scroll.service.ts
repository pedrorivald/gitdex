import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrolledPage = false;
  changeColor = false;

  constructor() { }

  onScroll() {
    window.onscroll = () => {
      window.scrollY > 100 ? this.scrolledPage = true : this.scrolledPage = false;
      this.withUserOnTop();
    }
  }

  scrollTop() {
    document.querySelector('body')?.scrollIntoView({ behavior: 'smooth' });
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
