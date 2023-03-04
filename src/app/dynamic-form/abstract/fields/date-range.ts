import { FormField } from "../form-field";

export class DateRangeField extends FormField<string> {
    override controlType = 'date-range';
}