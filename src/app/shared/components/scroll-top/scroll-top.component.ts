import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit {

  scrolledPage = false;

  constructor() { }

  ngOnInit(): void {
    window.onscroll = () => {
      window.scrollY > 100 ? this.scrolledPage = true : this.scrolledPage = false;
    }
  }

  scrollTop() {
    document.querySelector('body')?.scrollIntoView({ behavior: 'smooth' });
  }

}
