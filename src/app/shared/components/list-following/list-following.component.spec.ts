import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFollowingComponent } from './list-following.component';

describe('ListFollowingComponent', () => {
  let component: ListFollowingComponent;
  let fixture: ComponentFixture<ListFollowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFollowingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
