import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { DateRangeField } from '../abstract/fields/date-range';

import { FormField } from '../abstract/form-field';

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.scss']
})
export class DynamicFormFieldComponent {
  @Input() field!: FormField<string>;
  @Input() form!: FormGroup;
  get isValid() {
    if (this.field instanceof DateRangeField) {
      const formArray: FormArray = this.form.get(this.field.key) as FormArray;
      return formArray.valid;
    }
    else {
      return this.form.controls[this.field.key].valid;
    }
  }

}
