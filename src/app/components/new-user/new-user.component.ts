import { Component, OnInit, Input } from '@angular/core';
import { userToEdit } from '../review/review.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
@Input() userInfoToChange = userToEdit;

  registerUser:any = {
    firstName: '',
    lastName: '',
    email: '',
    roles: []
  };

  theError:any;

  constructor(private myRouter: Router) { }


//Go back to the homepage  
  redirect() {
    if (window.confirm("Do you want to leave this page?")) {
      this.myRouter.navigate(['./']);
    }
  }

//Get the form input and move to assigning roles
  firstPhase(userInfo){
    console.log('userinfo: ', userInfo)
    this.registerUser = userInfo; 
    //Save the state of the object to pass to the next component
    newUser = this.registerUser; 
    this.myRouter.navigate(["/assigned-roles"]);
  }
  

  ngOnInit() {
 //Prefill the form fileds if the user is being edited (not created)   
    if (this.userInfoToChange) {
          this.registerUser = this.userInfoToChange;
        }

  }

}

export let newUser;