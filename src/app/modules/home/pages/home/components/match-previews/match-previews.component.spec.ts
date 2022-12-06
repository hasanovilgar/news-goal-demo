import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchPreviewsComponent } from './match-previews.component';

describe('MatchPreviewsComponent', () => {
  let component: MatchPreviewsComponent;
  let fixture: ComponentFixture<MatchPreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchPreviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchPreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
