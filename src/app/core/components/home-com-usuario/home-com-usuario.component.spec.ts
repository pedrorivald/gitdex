import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComUsuarioComponent } from './home-com-usuario.component';

describe('HomeComUsuarioComponent', () => {
  let component: HomeComUsuarioComponent;
  let fixture: ComponentFixture<HomeComUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
