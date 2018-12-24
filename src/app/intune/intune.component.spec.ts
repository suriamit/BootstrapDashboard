import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntuneComponent } from './intune.component';

describe('IntuneComponent', () => {
  let component: IntuneComponent;
  let fixture: ComponentFixture<IntuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntuneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
