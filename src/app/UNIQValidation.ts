import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UNIQValidation { 
  static repeted (control:AbstractControl):Promise<ValidationErrors> | null
{
  return new Promise((resolve,reject)=>{
   
  setTimeout(() => {
    if (control.value == 'alabsi@0.com')
    {
     resolve ({repeted:true});
    } 
    else {
     resolve (null);
    } 
  }, 2000);
   
 })
}
}

