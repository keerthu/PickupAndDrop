import { Component } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthenticationService } from './services/authentication.service';
import { MatDialog } from '@angular/material';
import { ComplaintService } from './services/complaint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PickAndDrop';
  dialogValue:string; 
  sendValue:string;
  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.authService.authenticated = localStorage.getItem('token') !== null;
  }

  logout() {
    this.authService.logout();
  }
}

