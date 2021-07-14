import { NgModule } from '@angular/core';

// Importing Custom Modules - Mudasir Ali
import { ClientBlocksModule } from './blocks/blocks.module';
import { ClientRoutingModule } from './client-routing.module';
import { ClientFeaturesModule } from './features/features.module';
import { ClientSharedModule } from './shared/shared.module';

@NgModule({
  declarations: [],
  imports: [ClientRoutingModule, ClientBlocksModule, ClientFeaturesModule, ClientSharedModule],
})
export class ClientModule {}
