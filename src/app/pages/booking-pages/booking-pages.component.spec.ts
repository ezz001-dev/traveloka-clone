import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPagesComponent } from './booking-pages.component';

describe('BookingPagesComponent', () => {
  let component: BookingPagesComponent;
  let fixture: ComponentFixture<BookingPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
