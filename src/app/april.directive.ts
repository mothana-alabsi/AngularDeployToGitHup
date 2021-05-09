import { FormGroup, FormControl } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appApril]'
})
export class AprilDirective {

  form: FormGroup;

  constructor() {
      this.form = new FormGroup({
          email: new FormControl()
          , password:new FormControl()
      });
  }


}
