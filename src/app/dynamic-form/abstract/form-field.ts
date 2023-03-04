import { ValidatorFn } from "@angular/forms";

export class FormField<T> {
    value: T|undefined;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    format: (value: T) => T;
    validators: ValidatorFn[];
    options: IFieldOption[];
    access: FieldAccess;

    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        order?: number;
        controlType?: string;
        type?: string;
        format?: (value: T) => T,
        validators?: ValidatorFn[],
        options?: IFieldOption[],
        access?: FieldAccess
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.format = options.format || (value => value);
        this.validators = options.validators || [];
        this.options = options.options || [];
        this.access = options.access || 'none';
    }
}

export declare interface IFieldOption {
    key: string;
    value: string;
    selected?: boolean;
}

export type FieldAccess = 'write' | 'read' | 'none';