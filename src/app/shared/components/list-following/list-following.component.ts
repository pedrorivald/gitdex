import { Component, OnInit } from '@angular/core';
import { FollowService } from 'src/app/core/services/follow.service';

@Component({
  selector: 'app-list-following',
  templateUrl: './list-following.component.html',
  styleUrls: ['./list-following.component.scss']
})
export class ListFollowingComponent implements OnInit {

  throttle = 50;
  scrollDistance = 1;

  constructor( public followService: FollowService) {}

  ngOnInit(): void { this.followService.getFollowingPerPage(); }

  onScrollDown() {
    this.followService.getFollowingPerPage();
  }

}
