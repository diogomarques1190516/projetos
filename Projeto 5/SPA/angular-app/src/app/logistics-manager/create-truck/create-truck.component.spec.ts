import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CreateTruckComponent } from './create-truck.component';

describe('CreateTruckComponent', () => {
  let component: CreateTruckComponent;
  let fixture: ComponentFixture<CreateTruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
      ],
      providers: [CreateTruckComponent],
      declarations: [
        CreateTruckComponent,
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should validate the License Plate model: AA-00-00", () => {
    const input = "GG-22-22";
    const regex = /([A-Z]{2}-[0-9]{2}-[0-9]{2}|[0-9]{2}-[A-Z]{2}-[0-9]{2}|[0-9]{2}-[0-9]{2}-[A-Z]{2}|[A-Z]{2}-[0-9]{2}-[A-Z]{2})/;

    expect(input).toMatch(regex);
  });

  it("should validate the License Plate model: 00-00-AA", () => {
    const input = "22-22-GG";
    const regex = /([A-Z]{2}-[0-9]{2}-[0-9]{2}|[0-9]{2}-[A-Z]{2}-[0-9]{2}|[0-9]{2}-[0-9]{2}-[A-Z]{2}|[A-Z]{2}-[0-9]{2}-[A-Z]{2})/;

    expect(input).toMatch(regex);
  });

  it("should validate the License Plate model: 00-AA-00", () => {
    const input = "22-GG-22";
    const regex = /([A-Z]{2}-[0-9]{2}-[0-9]{2}|[0-9]{2}-[A-Z]{2}-[0-9]{2}|[0-9]{2}-[0-9]{2}-[A-Z]{2}|[A-Z]{2}-[0-9]{2}-[A-Z]{2})/;

    expect(input).toMatch(regex);
  });

  it("should validate the License Plate model: AA-00-AA", () => {
    const input = "GG-22-GG";
    const regex = /([A-Z]{2}-[0-9]{2}-[0-9]{2}|[0-9]{2}-[A-Z]{2}-[0-9]{2}|[0-9]{2}-[0-9]{2}-[A-Z]{2}|[A-Z]{2}-[0-9]{2}-[A-Z]{2})/;

    expect(input).toMatch(regex);
  });


  it("should validate an invalid License Plate", () => {
    const input = "GG-GG-22";
    const regex = /([A-Z]{2}-[0-9]{2}-[0-9]{2}|[0-9]{2}-[A-Z]{2}-[0-9]{2}|[0-9]{2}-[0-9]{2}-[A-Z]{2}|[A-Z]{2}-[0-9]{2}-[A-Z]{2})/;

    expect(input).not.toMatch(regex);
  });

  it('valid tare', () => {
    const input = 5000

    expect(input).toBeGreaterThan(0);
  });

  it('invalid tare', () => {
    const input = -5000

    expect(input).toBeLessThan(0);
  });

  it('valid totalBatteryCapacity', () => {
    const input = 50

    expect(input).toBeGreaterThan(0);
  });

  it('invalid totalBatteryCapacity', () => {
    const input = -50

    expect(input).toBeLessThan(0);
  });

  it('valid rechargeTime', () => {
    const input = 50

    expect(input).toBeGreaterThan(0);
  });

  it('invalid rechargeTime', () => {
    const input = -50

    expect(input).toBeLessThan(0);
  });

  it('valid autonomyWithMaxLoad', () => {
    const input = 50

    expect(input).toBeGreaterThan(0);
  });

  it('invalid autonomyWithMaxLoad', () => {
    const input = -50

    expect(input).toBeLessThan(0);
  });

  it('valid loadCapacity', () => {
    const input = 5000

    expect(input).toBeGreaterThan(0);
  });

  it('invalid loadCapacity', () => {
    const input = -5000

    expect(input).toBeLessThan(0);
  });


});
