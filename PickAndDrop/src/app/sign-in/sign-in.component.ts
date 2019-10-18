import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  pageTitle = 'Sig in to your account';
  subTitle = 'Enter your credentials...';
  redirectUrl: string = '';

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => this.redirectUrl = params['returnUrl'] || 'home');
      this.signInForm = this.formBuilder.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  cancel() {
    this.router.navigate(['home']);
  }

  login() {
    this.authService.login(this.signInForm.value, this.redirectUrl);
  }
}
