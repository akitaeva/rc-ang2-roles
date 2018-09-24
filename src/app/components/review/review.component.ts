import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { registerUser } from '../roles-assignment/roles-assignment.component';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() theUser = registerUser;
  
  allAvailRoles:any;
  errorMessage: string;
  userRoles:any;

  constructor(private authService: AuthService,
    private myRouter: Router) { }

  //go back to the "new user" view with the newest state of the object
  editUserInfo() {
    userToEdit = this.theUser;
    console.log("this is the user object passed back to new-user view: ", userToEdit)
    this.myRouter.navigate(['./newuser']);
  }

  // editUserRoles() {
  //   userToEdit = this.theUser;
  //   console.log("this is the user object passed back to assign-roles view: ", userToEdit)
  //   this.myRouter.navigate(['./assigned-roles']);
  // }

  redirect() {
    if (window.confirm("Do you want to leave this page and lose all new user data?")) { 
      this.myRouter.navigate(['./']);
    }
  }

  saveToDB() {
    console.log("review ts user object: ", this.theUser);
    this.authService
    .register(this.theUser)
    .toPromise()
    .then(resultFromApi => {
      // console.log('user info:', this.theUser)
        // clear form
        this.theUser = { firstName: "", lastName: "", email: "",  roles:[] };

        // clear error message
        this.errorMessage = "";

        // redirect to home page
        this.myRouter.navigate(["/"]);
      })
      .catch(err => {
        const parsedError = err.json();
        this.errorMessage = parsedError.message + " =/";
      });
      window.alert("The user data has been saved on the server!")
      this.myRouter.navigate(['./']);
  } // close saveToDB()
  

  //getting the role names according to the roleIDs 
  getRoleNames(userRoles) {
    let roleNames = [];
    userRoles.forEach(oneRole => {
      for(let i=0; i< this.allAvailRoles.length; i++ ){
        if(oneRole === this.allAvailRoles[i].roleId){
          console.log("inside the filtering loop ", this.allAvailRoles[i].name)
          roleNames.push(this.allAvailRoles[i].name)
          return roleNames
        }
      }
    })
    console.log("the array of role names: ", roleNames);
    return roleNames;


  }

  ngOnInit() {
    this.allAvailRoles = this.authService.getRoles()
    this.userRoles = this.getRoleNames(this.theUser.roles);
    
    console.log("review ONLOAD all selected USER roles: ", this.userRoles);

  }

}

export let userToEdit;
