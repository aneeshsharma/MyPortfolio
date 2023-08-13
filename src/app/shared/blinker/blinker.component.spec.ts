import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlinkerComponent } from './blinker.component';

describe('BlinkerComponent', () => {
  let component: BlinkerComponent;
  let fixture: ComponentFixture<BlinkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlinkerComponent]
    });
    fixture = TestBed.createComponent(BlinkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
