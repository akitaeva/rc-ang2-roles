import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { newUser } from '../new-user/new-user.component'
import { CheckboxItem, RolesAssignmentComponent} from '../roles-assignment/roles-assignment.component'

@Component({
  selector: 'checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.css']
})
export class CheckboxGroupComponent implements OnInit {
  @Input() options = Array<CheckboxItem>();
  @Input() newUser = newUser;
  @Output() toggle = new EventEmitter<any[]>();

  selectedValues:any;

  constructor() { }

  onToggle() {
    const checkedOptions = this.options.filter(res => res.checked);
    this.selectedValues = checkedOptions.map(res => res.value);
    console.log("what options are checked: ", checkedOptions)
    console.log("what is picked: ", this.selectedValues)
    this.toggle.emit(checkedOptions.map(res => res.value));
   }

  //  onRolesChange(value) {
  //   this.newUser.roles = value;
  //   registerUser = this.newUser;
  //   console.log('User roles:' , this.newUser.roles);
  //  } 

  ngOnInit() {
  }

}

