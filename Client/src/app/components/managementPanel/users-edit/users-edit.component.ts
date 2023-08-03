import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetail } from 'src/app/models/user/UserDetail';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  users: UserDetail[];
  dataLoaded: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }




  getUsers() {
    this.userService.getUserDetails().subscribe((response) => {
      this.users = response.data;
    })
  }

  backToDashboard() {
    if (localStorage.getItem('dataLoaded') == 'true') {
      this.router.navigate(['/admin']).then(() => {
        window.location.reload();
      });

      localStorage.setItem('dataLoaded', String(this.dataLoaded))
    }
    else {
      localStorage.setItem('dataLoaded', String(this.dataLoaded = true))
    }
  }


}
