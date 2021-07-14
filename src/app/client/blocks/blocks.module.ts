import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexLayoutComponent } from './layouts/index-layout/index-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [IndexLayoutComponent, SidebarComponent, TopbarComponent],
  imports: [RouterModule, SharedModule, NzDropDownModule, NzIconModule],
})
export class ClientBlocksModule {}
