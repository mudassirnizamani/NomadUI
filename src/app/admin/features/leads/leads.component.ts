import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ToastrService } from 'ngx-toastr';
import { ILead } from 'src/app/core/models/ILead.interface';
import { LeadService } from 'src/app/core/services/lead/lead.service';
import { getAllLeads } from 'src/app/store/actions/leads/leads.actions';
import { LeadsState } from 'src/app/store/reducers/leads/leads.reducer';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss'],
})
export class LeadsComponent implements OnInit {
  allLeads: ILead[];
  isLoading: boolean = true;
  isVisible = false;
  isConfirmLoading = false;
  leads$ = this.store.select('leads');

  constructor(
    private leadsService: LeadService,
    private message: NzMessageService,
    private toastr: ToastrService,
    private store: Store<LeadsState>
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
    // this.leadsService.getAllLeads().subscribe(
    //   (res: any) => {
    //     if (res.succeeded) {
    //       this.allLeads = res.leads;
    //       this.isLoading = false;
    //       this.message.success('Data Succueesfully fetched');
    //       console.log(this.allLeads)
    //     } else if (!res.succeeded && res.code == 'ServerError') {
    //       this.isLoading = false;
    //       this.message.error(res.description);
    //     }
    //   },
    //   (error) => {
    //     this.isLoading = false;
    //     this.toastr.error("Server Didn't Respond", 'Plz try later');
    //   }
    // );
    this.store.dispatch(getAllLeads());
    this.leads$.subscribe((data: any) => {
      (this.allLeads = data), console.log(data);
    });
  }
}
