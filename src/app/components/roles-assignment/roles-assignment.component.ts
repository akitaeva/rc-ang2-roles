import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { newUser } from '../new-user/new-user.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-roles-assignment',
  templateUrl: './roles-assignment.component.html',
  styleUrls: ['./roles-assignment.component.css']
})
export class RolesAssignmentComponent implements OnInit {
  @Input() newUser = newUser;

  availableRoles:any;
  theError:any;
  tempRoles:any;
  

  constructor(private authService: AuthService,
    private myRouter: Router) { }


  review(){
    registerUser = this.newUser; 
    this.myRouter.navigate(["/review"]);
    }
  
//navigating to the new user info
  editingUserInfo(){
    this.myRouter.navigate(['./newuser']);
  }

  //redirecting "home" on "cancel" of data entry 
  redirect() {
    if (window.confirm("Do you want to leave this page and lose all new user data?")) { 
      this.myRouter.navigate(['./']);
    }
      
  }

  //saving roles input into the user object
  onRolesChange(value) {
    this.newUser.roles = value;
    registerUser = this.newUser; //saving the state into the object to pass on

   } 


  ngOnInit() {
    setTimeout(() => {
    this.availableRoles = this.authService.getRoles()
    .map(res => { 
      this.tempRoles = res;
      return new CheckboxItem(this.tempRoles.roleId, this.tempRoles.name)});
    }, 100);
  }


}


export class CheckboxItem {
  value: string;
  label: string;
  checked: boolean;
 
  constructor(value: any, label: any, checked?: boolean) {
   this.value = value;
   this.label = label;
   this.checked = checked ? checked : false;
  }
 }

 export let registerUser;