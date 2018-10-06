import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalNoseComponent } from './normal-nose.component';

describe('NormalNoseComponent', () => {
  let component: NormalNoseComponent;
  let fixture: ComponentFixture<NormalNoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalNoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalNoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
