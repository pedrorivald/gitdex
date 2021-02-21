import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReposComponent } from './list-repos.component';

describe('ListReposComponent', () => {
  let component: ListReposComponent;
  let fixture: ComponentFixture<ListReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
