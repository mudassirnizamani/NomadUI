import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads.component';

// Ant Desing Modules - Mudasir Ali
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [LeadsComponent],
  imports: [CommonModule, LeadsRoutingModule, NzModalModule, NzButtonModule],
})
export class LeadsModule {}
