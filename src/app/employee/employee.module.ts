import { NgModule } from '@angular/core';
import { EmployeeRoutingModule } from './employee-routing.module';

// Importing Custom Modules - Mudasir ALi
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { BlocksModule } from './blocks/blocks.module';

@NgModule({
  declarations: [],
  imports: [EmployeeRoutingModule, BlocksModule, FeaturesModule, SharedModule],
})
export class EmployeeModule {}
