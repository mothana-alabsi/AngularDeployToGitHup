import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string="https://jsonplaceholder.typicode.com/posts";
  private posts:any[];
constructor(private http:Http) { }


getData(){
 return this.http.get(this.url);
}

createelemenent(post){


  return this.http.post(this.url,JSON.stringify(post));

}

updatedata(post){


  return this.http.put(this.url+'/'+post.id,post.id,JSON.stringify(post))

}

}
