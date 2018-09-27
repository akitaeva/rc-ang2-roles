import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { userToEdit } from '../review/review.component';
import { User } from '../user.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit, OnDestroy {
@Input() userInfoToChange = userToEdit;
@Input('user') user: User;

  registerUser = new User;

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

  ngOnDestroy() {
    this.registerUser = null;
    this.userInfoToChange = null;
  }

}

export let newUser;