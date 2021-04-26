import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/core/services/scroll.service';

@Component({
  selector: 'app-button-back',
  templateUrl: './button-back.component.html',
  styleUrls: ['./button-back.component.scss']
})
export class ButtonBackComponent implements OnInit {

  constructor(public scrollService: ScrollService) { }

  ngOnInit(): void { }
}
