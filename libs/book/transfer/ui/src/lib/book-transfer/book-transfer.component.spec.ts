import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTransferComponent } from './book-transfer.component';

describe('BookTransferComponent', () => {
  let component: BookTransferComponent;
  let fixture: ComponentFixture<BookTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookTransferComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
