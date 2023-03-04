import { FormField } from "../form-field";

export class TextAreaField extends FormField<string> {
    override controlType = 'textarea';
}