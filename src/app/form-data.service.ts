import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { of } from 'rxjs';
import { CheckboxField } from './dynamic-form/abstract/fields/checkbox';
import { DateRangeField } from './dynamic-form/abstract/fields/date-range';

import { DropDownField } from './dynamic-form/abstract/fields/dropdown';
import { RichTextField } from './dynamic-form/abstract/fields/editor';
import { RadioField } from './dynamic-form/abstract/fields/radio';
import { TextAreaField } from './dynamic-form/abstract/fields/textarea';
import { TextBoxField } from './dynamic-form/abstract/fields/textbox';
import { FormField } from './dynamic-form/abstract/form-field';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  getFields() {

    const questions: FormField<string>[] = [

      new DropDownField({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'item1',  value: 'Item 1'},
          {key: 'item2',  value: 'Item 2'},
          {key: 'item3',   value: 'Item 3'},
          {key: 'item4', value: 'Item 4'}
        ],
        value: 'item3',
        order: 3,
        access: 'write'
      }),

      new TextBoxField({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        validators: [Validators.required],
        order: 1,
        access: 'write'
      }),

      new TextBoxField({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
        access: 'write'
      }),

      new TextAreaField({
        key: 'description',
        label: 'Description',
        validators: [Validators.required],
        order: 4,
        value: 'asdfasfd',
        access: 'write'
      }),

      new RichTextField({
        key: 'rich text',
        label: 'Rich Text',
        order: 5,
        access: 'read'
      }),

      new TextBoxField({
        key: 'createdAt',
        label: 'Create Date',
        type: 'date',
        order: 7,
        value: '2022-12-02',
        validators: [Validators.required],
        access: 'read'
      }),

      new RadioField({
        key: 'select-one',
        label: 'Radio Select',
        order: 8,
        validators: [Validators.required],
        options: [
          {key: 'op1', value: 'Option 1'},
          {key: 'op2', value: 'Option 2'},
          {key: 'op3', value: 'Option 3'}
        ],
        format: (value: string) => {return value + '!'},
        value: 'op2',
        access: 'none'
      }),

      new CheckboxField({
        key: 'select-multi',
        label: 'Check Select',
        order: 9,
        validators: [Validators.required],
        options: [
          {key: 'op4', value: 'Option 4', selected: true},
          {key: 'op5', value: 'Option 5', selected: false},
          {key: 'op6', value: 'Option 6', selected: true}
        ],
        access: 'read'
      }),

      new DateRangeField({
        key: 'from-to',
        label: 'Date Range',
        order: 10,
        validators: [Validators.required],
        value: '',
        access: 'read'
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
