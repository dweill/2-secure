import { FormControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static whitespaceValidator(control: FormControl): ValidationErrors | null {
    return (control.value || '').trim().length? null : { 'whitespace': true };
}
}
