import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ComplaintService} from 'src/app/services/complaint.service';
import { Complaint } from 'src/app/models/complaint.model';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';

@Component({
  selector: 'app-list-complaints',
  templateUrl: './list-complaints.component.html',
  styleUrls: ['./list-complaints.component.css']
})
export class ListComplaintsComponent implements OnInit {
  searchText;
  complaints: Complaint[] = [];
  dataSource: MatTableDataSource<Complaint>;
  status = ['All', 'New', 'Pending', 'Resolved', 'Move to High level'];
  displayedColumns: string[] = ['No', 'customerName', 'emailAddress', 'complaintDescription', 
                              'createdAt', 'status', 'action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(private route: ActivatedRoute, private complaintService: ComplaintService,
    public dialog: MatDialog) {
      this.complaints = this.route.snapshot.data.complaints;
      this.complaintService.complaintsList = this.complaints;
      this.complaints.reverse();
  }

    ngOnInit() {
      this.dataSource = new MatTableDataSource(this.complaints);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
