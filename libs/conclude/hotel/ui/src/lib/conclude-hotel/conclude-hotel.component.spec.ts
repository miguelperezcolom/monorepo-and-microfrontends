import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcludeHotelComponent } from './conclude-hotel.component';

describe('ConcludeHotelComponent', () => {
  let component: ConcludeHotelComponent;
  let fixture: ComponentFixture<ConcludeHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcludeHotelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConcludeHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
