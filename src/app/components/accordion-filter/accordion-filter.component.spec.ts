import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionFilterComponent } from './accordion-filter.component';

describe('AccordionFilterComponent', () => {
  let component: AccordionFilterComponent;
  let fixture: ComponentFixture<AccordionFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
