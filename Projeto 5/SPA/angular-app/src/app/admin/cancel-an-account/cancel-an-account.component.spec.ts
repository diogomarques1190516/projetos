import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelAnAccountComponent } from './cancel-an-account.component';

describe('CancelAnAccountComponent', () => {
  let component: CancelAnAccountComponent;
  let fixture: ComponentFixture<CancelAnAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelAnAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelAnAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
