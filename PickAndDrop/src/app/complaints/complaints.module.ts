import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatDialogModule, 
         MatFormFieldModule, MatGridListModule,
         MatTableModule, MatIconModule, MatInputModule, 
         MatToolbarModule, MatPaginatorModule, MatSortModule, MatSelectModule } from '@angular/material';
import { ListComplaintsComponent } from './list-complaints/list-complaints.component';
import {ComplaintListResolver} from '../helpers/ComplaintListResolver';
import { GetComplaintComponent } from './get-complaint/get-complaint.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListComplaintsComponent, GetComplaintComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    RouterModule
  ],
  providers: [
    ComplaintListResolver
  ],
})
export class ComplaintsModule { }
