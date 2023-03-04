import { FormField } from "../form-field";

export class RichTextField extends FormField<string> {
    override controlType = 'richtext';
}