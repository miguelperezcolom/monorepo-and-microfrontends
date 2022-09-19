import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcludeFlightComponent } from './conclude-flight.component';

describe('ConcludeFlightComponent', () => {
  let component: ConcludeFlightComponent;
  let fixture: ComponentFixture<ConcludeFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcludeFlightComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConcludeFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
