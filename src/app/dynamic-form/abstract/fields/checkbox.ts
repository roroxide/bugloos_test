import { FormField } from "../form-field";

export class CheckboxField extends FormField<string> {
    override controlType = 'checkbox';
}