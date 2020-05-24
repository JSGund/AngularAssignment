import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {

  @Input()user: any;
  userForm: FormGroup;
  lblHeader: any;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      role: ['Admin'],
      mobilenumber: ''
    });
  }

  ngOnInit() {

    if (this.user) {
      this.lblHeader = 'Update User';

      this.userForm.setValue({
        name: this.user.Name,
        email: this.user.Email,
        role: ['Admin'],
        mobilenumber: this.user.MobileNumber ? this.user.MobileNumber : ''
      });

    } else {
      this.lblHeader = 'Add User';
    }
  }

  private submitForm() {
    this.activeModal.close(this.userForm.value);
  }

}
