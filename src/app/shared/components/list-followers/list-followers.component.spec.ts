import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFollowersComponent } from './list-followers.component';

describe('ListFollowersComponent', () => {
  let component: ListFollowersComponent;
  let fixture: ComponentFixture<ListFollowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFollowersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
