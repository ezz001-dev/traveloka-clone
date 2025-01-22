import { Component, ViewEncapsulation } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';


@Component({
  selector: 'app-accordion-filter',
  imports: [
    AccordionModule, CheckboxModule

  ],
  templateUrl: './accordion-filter.component.html',
  styleUrl: './accordion-filter.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AccordionFilterComponent {
  checkboxs: any[] = [
    { label: 'Mengesankan', value: '' },
    { label: 'Hotel', value: '' },
    { label: 'Villa', value: '' },
    { label: 'Resor', value: '' },
  ]
}
