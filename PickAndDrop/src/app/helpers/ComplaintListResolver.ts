import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Complaint } from '../models/complaint.model';
import { ComplaintService } from '../services/complaint.service';

@Injectable()
export class ComplaintListResolver implements Resolve<Complaint[]> {
  constructor(private complaintService: ComplaintService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Complaint[]> | Promise<Complaint[]>
    | Complaint[] {
    return this.complaintService.getComplaints().pipe(map(complaints => complaints));
  }
}
