import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileyMouthComponent } from './smiley-mouth.component';

describe('SmileyMouthComponent', () => {
  let component: SmileyMouthComponent;
  let fixture: ComponentFixture<SmileyMouthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmileyMouthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmileyMouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
