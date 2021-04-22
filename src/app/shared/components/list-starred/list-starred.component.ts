import { NavigateService } from 'src/app/core/services/navigate.service';
import { UserService } from 'src/app/core/services/user.service';
import { StarredService } from './../../../core/services/starred.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-starred',
  templateUrl: './list-starred.component.html',
  styleUrls: ['./list-starred.component.scss'],
})
export class ListStarredComponent implements OnInit {
  throttle = 50;
  scrollDistance = 1;

  constructor(
    public starredService: StarredService,
    public userService: UserService,
    public navigateService: NavigateService
  ) {}

  ngOnInit(): void {
    this.reset();
    this.starredService.getStarredPerPage(1);
  }

  onScrollDown() {
    this.starredService.getStarredPerPage();
  }

  reset() {
    this.starredService.listStarred = [];
  }
}
