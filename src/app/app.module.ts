import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CheckboxGroupComponent } from './components/checkbox-group/checkbox-group.component';
import { RolesAssignmentComponent } from './components/roles-assignment/roles-assignment.component';
import { ReviewComponent } from './components/review/review.component';
import { NewUserComponent } from './components/new-user/new-user.component';

//services:
import { AuthService } from './services/auth.service';

// routes:
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },  
  {
    path:'newuser',
    component:NewUserComponent
  },  
  {
    path:'assigned-roles',
    component:RolesAssignmentComponent
  },
  {
    path:'review',
    component:ReviewComponent
  },

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckboxGroupComponent,
    RolesAssignmentComponent,
    ReviewComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

debugger