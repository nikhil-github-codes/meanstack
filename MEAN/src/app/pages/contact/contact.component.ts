import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';
import { HttpClient } from '@angular/common/http';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public userObj= {name:"",email:"",phone:"",message:""};

  constructor(private userdataService:UserdataService) { }
 

  ngOnInit(): void { }

  submit(){
    console.log(this.userObj);
    this.userdataService.contactuser(this.userObj);
  };
  



}
   
