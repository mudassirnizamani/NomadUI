import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';

// Importing Custom Modules - Mudasir Ali
import { AdminBlocksModule } from './blocks/blocks.module';
import { AdminFeaturesModule } from './features/features.module';
import { AdminSharedModule } from './shared/shared.module';

@NgModule({
  declarations: [],
  imports: [AdminRoutingModule, AdminBlocksModule, AdminFeaturesModule, AdminSharedModule],
})
export class AdminModule {}
