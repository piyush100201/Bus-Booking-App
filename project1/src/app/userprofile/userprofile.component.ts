import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  User:any = [];

  constructor(private regService:RegistrationService) { 
    this.readUser();
  }

  ngOnInit(): void {
  }
 
  readUser(){
    this.regService.getUsers().subscribe((data)=>{
      this.User = data;
    })
  }

  removeUser(user:any, index:any){
    if(window.confirm('Are you sure?')){
      this.regService.deleteUser(user._id).subscribe((data)=>{
        this.User.splice(index,1);
      })
    }
  }

}
