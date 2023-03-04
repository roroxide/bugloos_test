import { FormField } from "../form-field";

export class DropDownField extends FormField<string> {
    override controlType = 'dropdown';
}