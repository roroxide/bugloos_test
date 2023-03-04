import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormField } from '../abstract/form-field';
import { FormControlService } from '../form-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: FormField<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private fcs: FormControlService) {}

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.fields as FormField<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
