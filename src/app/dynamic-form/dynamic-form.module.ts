import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormFieldComponent } from './dynamic-form-field/dynamic-form-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormControlService } from './form-control.service';



@NgModule({
  declarations: [
    DynamicFormFieldComponent,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DynamicFormComponent
  ],
  providers: [
    FormControlService
  ]
})
export class DynamicFormModule { }
