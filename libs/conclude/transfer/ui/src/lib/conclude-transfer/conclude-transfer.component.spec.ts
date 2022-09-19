import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcludeTransferComponent } from './conclude-transfer.component';

describe('ConcludeTransferComponent', () => {
  let component: ConcludeTransferComponent;
  let fixture: ComponentFixture<ConcludeTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcludeTransferComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConcludeTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
