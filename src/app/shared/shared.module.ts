import { NgModule } from '@angular/core';

// Importing Components
import { ThemeToggleSwitchComponent } from './components/theme-toggle-switch/theme-toggle-switch.component';
import { SidebarUserProfileComponent } from './components/sidebar-user-profile/sidebar-user-profile.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

// Importing Ant Design Modules - Mudasir Ali
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [
    ThemeToggleSwitchComponent,
    SidebarUserProfileComponent,
    SpinnerComponent,
  ],
  imports: [NzSpinModule],
  exports: [
    ThemeToggleSwitchComponent,
    SidebarUserProfileComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
