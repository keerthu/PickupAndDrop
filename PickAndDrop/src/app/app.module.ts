import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  MatButtonModule, MatCardModule, MatDialogModule, 
  MatFormFieldModule, MatIconModule, MatInputModule,
  MatToolbarModule, MatPaginatorModule, MatSortModule
} from '@angular/material';

import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ComplaintsModule } from './complaints/complaints.module';
import { SignUpComponent } from './sign-up/sign-up.component';

import { ToastrModule } from 'ng6-toastr-notifications';
import { CreateComplaintComponent } from './complaints/create-complaint/create-complaint.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    CreateComplaintComponent  
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    ComplaintsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  entryComponents: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
