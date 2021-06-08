import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';

// Importing Custom Modules - Mudasir Ali
import { BlocksModule } from './blocks/blocks.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [],
  imports: [AdminRoutingModule, BlocksModule, FeaturesModule, SharedModule],
})
export class AdminModule {}
