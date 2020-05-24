import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public lstUsers: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getAllUsers().subscribe((data) => {
      this.lstUsers = data;
    });

  }

}
