import { FormField } from "../form-field";

export class RadioField extends FormField<string> {
    override controlType = 'radio';
}