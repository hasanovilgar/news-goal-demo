import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMenComponent } from './popular-men.component';

describe('PopularMenComponent', () => {
  let component: PopularMenComponent;
  let fixture: ComponentFixture<PopularMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularMenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
