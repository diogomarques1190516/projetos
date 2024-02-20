import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RoutePlanningComponent } from './route-planning.component';

describe('RoutePlanningComponent', () => {
  let component: RoutePlanningComponent;
  let fixture: ComponentFixture<RoutePlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule 
      ],
      providers: [
        DatePipe,
        RoutePlanningComponent
      ],
      declarations: [RoutePlanningComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RoutePlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
