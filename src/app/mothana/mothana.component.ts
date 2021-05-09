import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mothana',
  templateUrl: './mothana.component.html',
  styleUrls: ['./mothana.component.css']
})
export class MothanaComponent {

  isActive=true;
  nameval: any;
  display(firstname: { value: any; }){
    this.nameval=firstname.value;
  }
  person:any[]=["dd","ddg"]
  onAdd(){
    this.person.push("angular");
  }
  onREMOVE(p: any){
   let index=this.person.indexOf(p);
   this.person.splice(index,1);

  }
  form: FormGroup;

  constructor() {
      this.form = new FormGroup({
          email: new FormControl()
          , password:new FormControl()
      });
  }

}




