import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';

// Importing Modules - Mudasir Ali
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    SharedModule
  ]
})
export class IndexModule { }
