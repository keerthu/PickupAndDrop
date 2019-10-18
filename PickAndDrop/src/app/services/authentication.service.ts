import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {ToastrManager} from 'ng6-toastr-notifications';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticated = false;
  baseUrl = 'https://localhost:5001/';

  constructor(private http: HttpClient,
              private router: Router,
              private toastr: ToastrManager) {}

  login(formData, redirectUrl) {  
    this.http.post(this.baseUrl + 'users/authenticate', formData).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('authenticated', 'true');
        this.authenticated = true;
        this.toastr.successToastr('Successfully LoggedIn', 'Success');
        this.router.navigate([redirectUrl]);
      },
      err => {
        if (err.status === 400) {
          this.toastr.errorToastr('Username or password is incorrect', 'Failed');
        } else {
          console.log(err);
        }
      }
    );
  }

  getUserProfile() {
    const tokenHeader = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.get(this.baseUrl + 'UserProfile', {headers: tokenHeader});
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.setItem('authenticated', 'false');
    this.authenticated = false;
    this.toastr.successToastr('Successfully logout', 'Logout');
    this.router.navigate(['welcome']);
  }
}
