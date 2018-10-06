import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalEyesComponent } from './normal-eyes.component';

describe('NormalEyesComponent', () => {
  let component: NormalEyesComponent;
  let fixture: ComponentFixture<NormalEyesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalEyesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalEyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
