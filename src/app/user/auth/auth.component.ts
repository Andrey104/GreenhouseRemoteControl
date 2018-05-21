import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})


export class AuthComponent implements OnInit {
  username;
  password;
  loading = false;
  fail: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {
  }
  myForm: FormGroup = new FormGroup({
    'userName': new FormControl('', Validators.required),
    'userPassword': new FormControl('', Validators.required),
  });
  ngOnInit() {
    this.logout();
  }
  login() {
    this.loading = true;
    const user = new User();
    user.username = this.username;
    user.password = this.password;
    this.authService.login(user).subscribe(
      data => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/']);
      },
      err => {
        console.log('Error:' + err.error);
        this.loading = false;
        if (err.status === 400) {
          this.fail = true;
        }
      }
    );
  }
  logout() {
    this.authService.logout();
  }
}
