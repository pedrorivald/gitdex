import { Component, OnInit } from '@angular/core';
import { FollowService } from 'src/app/core/services/follow.service';

@Component({
  selector: 'app-list-followers',
  templateUrl: './list-followers.component.html',
  styleUrls: ['./list-followers.component.scss']
})
export class ListFollowersComponent implements OnInit {

  throttle = 50;
  scrollDistance = 1;

  constructor( public followService: FollowService) {}

  ngOnInit(): void { this.followService.getFollowersPerPage(); }

  onScrollDown() {
    this.followService.getFollowersPerPage();
  }

}
