import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsManDashComponent } from './logistics-man-dash.component';

describe('LogisticsManDashComponent', () => {
  let component: LogisticsManDashComponent;
  let fixture: ComponentFixture<LogisticsManDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticsManDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogisticsManDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
