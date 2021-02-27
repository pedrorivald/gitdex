import { ReposService } from './../../../core/services/repos.service';
import { UserService } from './../../../core/services/user.service';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-list-repos',
  templateUrl: './list-repos.component.html',
  styleUrls: ['./list-repos.component.scss']
})
export class ListReposComponent implements OnInit {
  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0';
  breakpoint: number = 0;

  constructor(public userService: UserService, public reposService: ReposService) { }

  ngOnInit(): void {
    this.setBreakpoint();
  }

  onResize(event: any) {
    this.setBreakpoint();
  }

  setBreakpoint() {
    if(window.innerWidth <= 650) {
      this.breakpoint = 1;
    }else if (window.innerWidth <= 950) {
      this.breakpoint = 2;
    }else {
      this.breakpoint = 3;
    }
  }

}
