import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ToastrService } from 'ngx-toastr';
import { LeadService } from 'src/app/core/services/lead/lead.service';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss'],
})
export class LeadsComponent implements OnInit {
  allLeads: any;
  isLoading: boolean = true;
  isVisible = false;
  isConfirmLoading = false;


  constructor(
    private leadsService: LeadService,
    private message: NzMessageService,
    private toastr: ToastrService
  ) {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  ngOnInit(): void {
    this.leadsService.getAllLeads().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.allLeads = res.leads;
          this.isLoading = false;
          this.message.success('Data Succueesfully fetched');
          console.log(this.allLeads)
        } else if (!res.succeeded && res.code == 'ServerError') {
          this.isLoading = false;
          this.message.error(res.description);
        }
      },
      (error) => {
        this.isLoading = false;
        this.toastr.error("Server Didn't Respond", 'Plz try later');
      }
    );
    console.log(this.allLeads)
  }
}
