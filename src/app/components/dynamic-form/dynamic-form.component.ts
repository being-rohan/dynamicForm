import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iform, IformControls, IValidator } from 'src/app/interface';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() form!: Iform
  constructor(private _fb: FormBuilder) { }

  dynamicformGroup: FormGroup = this._fb.group({},{updateOn:'submit'})

  ngOnInit(): void {
    if (this.form?.formControls) {
      let fromGroup: any = {};
      this.form.formControls.forEach((control: IformControls) => {
        let controlValidators: any = [];
        if (control.validators) {
          control.validators.forEach((val: IValidator) => {
            if (val.validatorsName === 'required') controlValidators.push(Validators.required)
            if (val.validatorsName === 'email') controlValidators.push(Validators.email)
            if (val.validatorsName === 'minlength') controlValidators.push(Validators.minLength)
            if (val.validatorsName === 'maxlength') controlValidators.push(Validators.maxLength)
            if (val.validatorsName === 'pattern') controlValidators.push(Validators.pattern)



          });
        }
        fromGroup[control.name] = [control.value || '', controlValidators]
      })
      this.dynamicformGroup = this._fb.group(fromGroup)
    }

  }
  onSubmit() {
    console.log(this.dynamicformGroup.value)
  }
  reset() {
    this.dynamicformGroup.reset()
  }

  getvalidtoreErrors(control: IformControls): string {
    const myformControl = this.dynamicformGroup.get(control.name)

    let errmsg = '';
    control.validators?.forEach((val) => {
      if (myformControl?.hasError(val.validatorsName as string)) {
        errmsg = val.message as string
      }
    })
    return errmsg 
  }


}
