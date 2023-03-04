import { Injectable } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { CheckboxField } from "./abstract/fields/checkbox";
import { DateRangeField } from "./abstract/fields/date-range";

import { FormField } from "./abstract/form-field";

@Injectable()
export class FormControlService {
    toFormGroup(fields: FormField<string>[]) {
        const group: any = {};
        fields.forEach(field => {
            if (this.noAccess(field)) return;
            if (field instanceof CheckboxField) {
                group[field.key] = new FormArray(
                    field.options.map(option => {return new FormControl(option.selected)}),
                    field.validators
                );
                if (this.isNotwritable(field)) {
                    group[field.key].controls.forEach((fc: FormControl) => fc.disable());
                }
            }
            else if (field instanceof DateRangeField) {
                group[field.key] = new FormArray(
                    [
                        new FormControl(field.value || '', field.validators),
                        new FormControl(field.value || '', field.validators)
                    ]
                )
                if (this.isNotwritable(field)) {
                    group[field.key].controls[0].disable();
                    group[field.key].controls[1].disable();
                }
            }
            else {
                group[field.key] = new FormControl(field.value || '', field.validators);
                if (this.isNotwritable(field)) {
                    group[field.key].disable();
                }
            }
        });
        return new FormGroup(group);
    }


    private noAccess(field: FormField<string>): boolean {
        return field.access === 'none';
    }

    private isNotwritable(field: FormField<string>): boolean {
        return field.access !== 'write';
    }
}
