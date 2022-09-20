import {Component, EventEmitter, Output} from '@angular/core';
import {FormLayoutResponsiveStep} from "@vaadin/form-layout";

@Component({
  selector: 'monorepo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {

  @Output() book = new EventEmitter();

  responsiveSteps: FormLayoutResponsiveStep[] = [
    // Use one column by default
    { minWidth: 0, columns: 1 },
    // Use two columns, if layout's width exceeds 500px
    { minWidth: '500px', columns: 2 },
  ];

  performBook = () => {
    this.book.emit();
  }

}
