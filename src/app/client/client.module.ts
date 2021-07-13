import { NgModule } from '@angular/core';

// Importing Custom Modules - Mudasir Ali
import { BlocksModule } from './blocks/blocks.module';
import { ClientRoutingModule } from './client-routing.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [],
  imports: [ClientRoutingModule, BlocksModule, FeaturesModule, SharedModule],
})
export class ClientModule {}
