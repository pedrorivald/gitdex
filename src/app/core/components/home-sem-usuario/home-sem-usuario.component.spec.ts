import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSemUsuarioComponent } from './home-sem-usuario.component';

describe('HomeSemUsuarioComponent', () => {
  let component: HomeSemUsuarioComponent;
  let fixture: ComponentFixture<HomeSemUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSemUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSemUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
