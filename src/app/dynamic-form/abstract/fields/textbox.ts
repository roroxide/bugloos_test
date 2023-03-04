import { FormField } from "../form-field";

export class TextBoxField extends FormField<string> {
    override controlType = 'textbox';
}