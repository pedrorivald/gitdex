import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNoUserComponent } from './home-no-user.component';

describe('HomeNoUserComponent', () => {
  let component: HomeNoUserComponent;
  let fixture: ComponentFixture<HomeNoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNoUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
