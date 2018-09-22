import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesAssignmentComponent } from './roles-assignment.component';

describe('RolesAssignmentComponent', () => {
  let component: RolesAssignmentComponent;
  let fixture: ComponentFixture<RolesAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
