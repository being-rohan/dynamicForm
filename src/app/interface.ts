
export interface Iform {
    formTitle?: string;
    saveBtnTitle?: string;
    resetBtnTitle?: string;
    formControls: IformControls[]
}

export interface IformControls {
    name: string
    label: string
    value?: string
    options?: Ioptions[]
    radioOptions?: string[]
    placeholder?: string
    class: string
    type: string
    validators?: IValidator[]
}

export interface IValidator {
    validatorsName: string
    message?: string
    required?: boolean
    pattern?: string
    minlength?: number,
    maxlength?: number
    email?: string



}

export interface Ioptions {
    id?: number,
    value?: string
}