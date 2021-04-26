import { ScrollService } from './../../../core/services/scroll.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit {

  constructor(public scrollService: ScrollService) { }

  ngOnInit(): void { }
}
