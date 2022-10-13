import { HttpClient ,} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  
  constructor(private http:HttpClient){}
 
  contactuser(userObj:any) {
    console.log("UserdataService -> contactuser -> userObj",userObj)
    this.http.post('http://localhost:3000/contacts',userObj).subscribe(res =>{
     console.log(res);
    });
  }

}
