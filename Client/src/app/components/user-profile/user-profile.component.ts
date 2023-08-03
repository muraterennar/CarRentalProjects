import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetail } from 'src/app/models/user/UserDetail';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/localStorageService.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  users: UserDetail[];
  user: UserDetail;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private userService: UserService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((paramas) => {
      if (paramas['email']) {
        this.getUserDetailsByEmail(paramas['email']);
      }
    })
  }


  getUserDetailsByEmail(email: string) {
    this.userService.getUserDetailsByEmail(email).subscribe((response) => {
      this.users = response.data;
    })
  }

  getUserImage(imagePath: string) {
    return this.userService.getUserImage(imagePath);
  }

  goToUserProfileEdit(email: string) {
    this.router.navigate(['AnaSayfa/userProfileEdit/' + email])
  }
}
