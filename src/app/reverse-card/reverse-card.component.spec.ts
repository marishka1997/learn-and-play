import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseCardComponent } from './reverse-card.component';

describe('ReverseCardComponent', () => {
  let component: ReverseCardComponent;
  let fixture: ComponentFixture<ReverseCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReverseCardComponent]
    });
    fixture = TestBed.createComponent(ReverseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
