import { UNIQValidation } from './../UNIQValidation';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TextValidator } from '../customvaludate';
 import { Observable } from 'rxjs';
 import { Http } from '@angular/http';
 import {map} from 'rxjs/operators';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-yarab',
  templateUrl: './yarab.component.html',
  styleUrls: ['./yarab.component.css']
})
export class YarabComponent implements OnInit{

  posts:any[];
constructor( private service:AuthService){}

url:string="https://jsonplaceholder.typicode.com/posts";

 ngOnInit(): void {
    this.service.getData().subscribe(response=>{
    this.posts= response.json()
  })}


       form = new FormGroup({
    email: new FormControl('',[Validators.required],UNIQValidation.repeted)
    , password :new FormControl('',TextValidator.notallow)
});
get email() {
  return this.form.get('email');
}
get password() {
  return this.form.get('password');
}
Login(input:HTMLInputElement){
  return this.form.setErrors({errorcode:true});
}
createelemenent(input:HTMLInputElement){

  let post={title:input.value,id: ''};
 this.service.createelemenent(post).subscribe(response =>{
    this.posts.splice(0,0,post);
  });

}

updatedata(post,inputTitle){
   let newPost={title:inputTitle,id: post.id};
   console.log(post.title);

   this.service.updatedata(newPost).subscribe(response=>{
       let index=this.posts.indexOf(post);
       this.posts[index]=newPost;
    })

}
}




