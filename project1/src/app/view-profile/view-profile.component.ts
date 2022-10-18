import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../registration.service';
import { User } from '../models/user';



@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
    
  public title = 'User Detail';
  User!: any;
  id!: any;

 
  
  constructor(private regService:RegistrationService) { 
  }

  ngOnInit(): void { this.User = new User();
    this.regService.getUserById(this.id).subscribe((data) => {
      this.User = data;
      console.log(data);
    })

  }
 
  
}
