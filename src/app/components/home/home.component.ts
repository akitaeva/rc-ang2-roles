import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  deadEnd = "Something else is not a part of this challange"

  constructor( private myAuth:AuthService,
              private myRouter: Router) { }

  alert() {
    window.alert(this.deadEnd);
  }     
  
  redirect() {
    this.myRouter.navigate(['./newuser']);
  }

  ngOnInit() {
  }

}
