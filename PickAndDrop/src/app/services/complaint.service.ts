import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {ToastrManager} from 'ng6-toastr-notifications';
import { Complaint } from '../models/complaint.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ComplaintService {
    baseUrl = 'https://localhost:5001/';
    complaintsList: Complaint[] = [];
    formData: Complaint;
    complaint: Complaint;

    constructor(private http: HttpClient,
        private router: Router,
        private toastr: ToastrManager) {}

    postComplaint(complaint , redirectUrl) {
        return this.http.post(this.baseUrl + 'api/Complaints', complaint).subscribe(
        (res: any) => {
            this.toastr.successToastr('Complaint Submitted!.Thank you for contacting us. We will soon look into the matter.', 'Success');
            this.router.navigate([redirectUrl]);
        },
        err => {
            if (err.status === 400) {
                this.toastr.errorToastr('Complaint submission failed ', 'Failed');
            } else {
                console.log(err);
            }
        });
    }
    
    getComplaints(): Subject<Complaint[]> {
        const subject = new Subject<Complaint[]>();
        const tokenHeader = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
        this.http.get<Complaint[]>(this.baseUrl + 'api/Complaints', {headers: tokenHeader}).subscribe(
            complaints => subject.next(complaints),
            err => {
                subject.error(err);
            },
            () => subject.complete()
        );
        return subject;
    }

    getComplaintById(id: number) : Observable<Complaint> {
        const tokenHeader = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
        return this.http.get<Complaint>(this.baseUrl + 'api/Complaints' + id, {headers: tokenHeader});
            
    }

    updateComplaint(id: number, complaint: Complaint) : Observable<any> {
        const tokenHeader = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
        return this.http.put(this.baseUrl + 'api/Complaints/' + id, complaint, {headers: tokenHeader});
    }

    findComplaint(id: number) {
        return this.complaintsList.filter(c => c.ComplaintId === id)[0];
    }
}