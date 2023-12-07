import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandAlone2Component } from './stand-alone2.component';

describe('StandAlone2Component', () => {
  let component: StandAlone2Component;
  let fixture: ComponentFixture<StandAlone2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StandAlone2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandAlone2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
