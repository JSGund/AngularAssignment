import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModalComponent } from '../user-modal/user-modal.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public lstUsers: User[];
  private userId: any;
  private userStatus: any;

  constructor(private userService: UserService, private modalService: NgbModal) { }

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userService.getAllUsers().subscribe((data) => {
      this.lstUsers = data;
    });
  }

  openFormModal(user: any) {
    const modalRef = this.modalService.open(UserModalComponent);
    if (user) {
      modalRef.componentInstance.user = user;
      this.userId = user._id;
      this.userStatus = user.Status;
    }

    modalRef.result.then((result) => {
      console.log(result);
      if (this.userId) {
        this.userService.updateUser(this.userId, this.userStatus, result).subscribe((res) => {
          this.loadAllUsers();
        }, err => {
          console.log(err);
        } );
      } else {
        this.userService.addUser(result).subscribe((res) => {
          this.loadAllUsers();
        }, err => {
          console.log(err);
        } );
      }

    }).catch((error) => {
      console.log(error);
    });
  }

  onDeleteUser(id: any) {
    this.userService.deleteUser(id).subscribe((res) => {
      this.loadAllUsers();
    }, err => {
      console.log(err);
    } );

  }

}
