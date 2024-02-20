import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWarehouseComponent } from './list-warehouse.component';

describe('ListWarehouseComponent', () => {
  let component: ListWarehouseComponent;
  let fixture: ComponentFixture<ListWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListWarehouseComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
