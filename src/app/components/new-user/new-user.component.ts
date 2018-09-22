import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {


  registerUser:any = {
    firstName: '',
    lastName: '',
    email: '',
    roles: []
  };

  theError:any;

  constructor(private myRouter: Router) { }

  redirect() {
    this.myRouter.navigate(['./']);
  }

  ngOnInit() {
  }

}
