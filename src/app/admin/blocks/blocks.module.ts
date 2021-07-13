import { NgModule } from '@angular/core';

// Importing Components - Mudasir ALi
import { AdminIndexLayoutComponent } from './layouts/index-layout/index-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';

// Importing Modules
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [AdminIndexLayoutComponent, SidebarComponent, TopbarComponent],
  imports: [RouterModule, SharedModule, NzDropDownModule, NzIconModule],
})
export class BlocksModule {}
