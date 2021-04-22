import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStarredComponent } from './list-starred.component';

describe('ListStarredComponent', () => {
  let component: ListStarredComponent;
  let fixture: ComponentFixture<ListStarredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStarredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStarredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
