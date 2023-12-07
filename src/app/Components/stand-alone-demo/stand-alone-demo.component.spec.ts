import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandAloneDemoComponent } from './stand-alone-demo.component';

describe('StandAloneDemoComponent', () => {
  let component: StandAloneDemoComponent;
  let fixture: ComponentFixture<StandAloneDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StandAloneDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandAloneDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
