import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { UserService } from './user.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  p: number = 1;
  public users!: User[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  public searchUsers(search: string): void {
    if (search.length == 0) {
      this.getUsers();
    }
    let searchedUsers: User[] = [];
    this.users.forEach(
      (item) => item.first_name.toLowerCase().indexOf(search) > -1 && searchedUsers.push(item)
    );
    this.users = searchedUsers;
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
