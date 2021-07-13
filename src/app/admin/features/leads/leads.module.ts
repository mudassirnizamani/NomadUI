import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads.component';
import { LeadsService } from './services/leads.service';

// Ant Desing Modules - Mudasir Ali
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [LeadsComponent],
  imports: [CommonModule, LeadsRoutingModule, NzModalModule, NzButtonModule],
  providers: [LeadsService],
})
export class LeadsModule {}
