import { AbstractControl, ValidationErrors } from "@angular/forms";

export class TextValidator{ 
  static notallow(control:AbstractControl):ValidationErrors | null
{
   if ((control.value as string).indexOf(' ') !== -1)
   {
    return {notallow:true};
   } 
   else {
    return (null);
   } 
}
}
