import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseManDashComponent } from './warehouse-man-dash.component';

describe('WarehouseManDashComponent', () => {
  let component: WarehouseManDashComponent;
  let fixture: ComponentFixture<WarehouseManDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseManDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseManDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
