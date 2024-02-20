import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhibitTruckComponent } from './inhibit-truck.component';

describe('InhibitTruckComponent', () => {
  let component: InhibitTruckComponent;
  let fixture: ComponentFixture<InhibitTruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InhibitTruckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InhibitTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
