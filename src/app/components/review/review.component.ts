import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
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

  constructor(private authService: AuthService,
    private http: Http,
    private myRouter: Router) { }

  editUserInfo() {
    userToEdit = this.theUser;
    console.log("this is the user object passed back to new-user view: ", userToEdit)
    this.myRouter.navigate(['./newuser']);
  }

  editUserRoles() {
    userToEdit = this.theUser;
    console.log("this is the user object passed back to assign-roles view: ", userToEdit)
    this.myRouter.navigate(['./assigned-roles']);
  }

  redirect() {
    if (window.confirm("Do you really want to leave and loose all new user data?")) { 
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
  } // close saveToDB()
  

  ngOnInit() {
    // console.log("review ONLOAD user object: ", this.theUser);
    this.allAvailRoles = this.authService.getRoles()
    console.log("review ONLOAD all roles: ", this.allAvailRoles);

  }

}

export let userToEdit;
