import { NgModule } from '@angular/core';
import { EmployeeRoutingModule } from './employee-routing.module';

// Importing Custom Modules - Mudasir ALi
import { EmployeeSharedModule } from './shared/shared.module';
import { EmployeeFeaturesModule } from './features/features.module';
import { EmployeeBlocksModule } from './blocks/blocks.module';

@NgModule({
  declarations: [],
  imports: [EmployeeRoutingModule, EmployeeBlocksModule, EmployeeFeaturesModule, EmployeeSharedModule],
})
export class EmployeeModule {}
