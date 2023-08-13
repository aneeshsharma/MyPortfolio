import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorDefinitionComponent } from './cursor-definition.component';

describe('CursorDefinitionComponent', () => {
  let component: CursorDefinitionComponent;
  let fixture: ComponentFixture<CursorDefinitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursorDefinitionComponent]
    });
    fixture = TestBed.createComponent(CursorDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
