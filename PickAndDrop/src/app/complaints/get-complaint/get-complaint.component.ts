import { Component, OnInit } from '@angular/core';
import { Complaint } from 'src/app/models/complaint.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ComplaintService } from 'src/app/services/complaint.service';

@Component({
  selector: 'app-get-complaint',
  templateUrl: './get-complaint.component.html',
  styleUrls: ['./get-complaint.component.css']
})
export class GetComplaintComponent implements OnInit {
  pageTitle = 'Complaint Details';
  complaint: Complaint;
  id: number;

  constructor(private route: ActivatedRoute,
              private complaintService: ComplaintService,
              private router: Router,
              private toastr: ToastrManager) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    if (this.id) {
      this.complaintService.complaintsList = this.route.snapshot.data.complaints;
      this.complaint = this.complaintService.findComplaint(this.id);
    } else {
      this.complaint = this.complaintService.formData;
    }
  }

  getComplaintById(id) {
      this.complaintService.getComplaintById(id).subscribe(data => {
        this.id = data.ComplaintId;
      })
  }

  onBack(): void {
    this.router.navigate(['/complaints']);
  }

  onResolved() {
    this.complaint.Status = 'Resolved';
    this.complaintService.updateComplaint(this.id, this.complaint).subscribe(
      res => {
        this.toastr.successToastr('Complaint is resolved', 'Success');
        this.router.navigate(['/complaints']);
      }
    );
  }

  onMove() {
    this.complaint.Status = 'Move to high level';
    this.complaintService.updateComplaint(this.id, this.complaint).subscribe(
      res => {
        this.toastr.successToastr('Complaint is moved to High level', 'Success');
        this.router.navigate(['/complaints']);
      });
  }

  onPending() {
    this.complaint.Status = 'Pending';
    this.complaintService.updateComplaint(this.id, this.complaint).subscribe(
      res => {
        this.toastr.warningToastr('Complaint is pending', 'Pending');
        this.router.navigate(['/complaints']);
      });
  }
}
