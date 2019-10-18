import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Complaint } from 'src/app/models/complaint.model';
import {ComplaintService} from 'src/app/services/complaint.service';

@Component({
  selector: 'app-create-complaint',
  templateUrl: './create-complaint.component.html',
  styleUrls: ['./create-complaint.component.css']
})
export class CreateComplaintComponent implements OnInit {
  complaintForm: FormGroup;
  complaint: Complaint;
  pageTitle = 'Make a complaint';
  redirectUrl: string = '';

  constructor( private complaintService: ComplaintService, private formBuilder: FormBuilder,
    private router: Router, private toastr: ToastrManager,     private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => this.redirectUrl = params['returnUrl'] || 'home');
    this.complaintForm = this.formBuilder.group({
      CustomerName: ['', Validators.required],
      EmailAddress: ['', [Validators.required, Validators.email]],
      ComplaintDescription: ['', Validators.required]
    });
  }

  save() {
    this.complaint = this.complaintForm.value;
    this.complaint.Status = "New";
    this.complaint.CreatedAt = new Date();
    this.complaintService.postComplaint(this.complaint, this.redirectUrl);
  }

  cancel() {
    this.router.navigate(['home']);
  }

}
