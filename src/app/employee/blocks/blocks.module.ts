import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Imporitng Components - Mudasir Ali
import { IndexLayoutComponent } from './layouts/index-layout/index-layout.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

// Importing Modules - Mudasir Ali
import { SharedModule } from 'src/app/shared/shared.module';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [IndexLayoutComponent, SidebarComponent, TopbarComponent],
  imports: [RouterModule, SharedModule, NzDropDownModule, NzIconModule],
})
export class EmployeeBlocksModule {}
