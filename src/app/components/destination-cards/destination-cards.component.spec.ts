import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationCardsComponent } from './destination-cards.component';

describe('DestinationCardsComponent', () => {
  let component: DestinationCardsComponent;
  let fixture: ComponentFixture<DestinationCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
