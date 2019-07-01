import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

export const validatorFn = (
  allowedTags: string[],
  errorMsg: string
): ValidatorFn => (control: AbstractControl): ValidationErrors =>
  allowedTags.includes(control.value) ? null : { tag: errorMsg };

@Directive({
  selector: '[appValidTag]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidatorDirective,
      multi: true
    }
  ]
})
export class ValidatorDirective implements Validator {
  @Input()
  private allowedTags: string[];

  @Input()
  private errorMsg: string = 'not allowed';

  validate(control: AbstractControl): ValidationErrors {
    return validatorFn(this.allowedTags, errorMsg)(control);
  }
}
