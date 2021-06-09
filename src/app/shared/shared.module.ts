import { NgModule } from '@angular/core';

// Importing Components
import { ThemeToggleSwitchComponent } from './components/theme-toggle-switch/theme-toggle-switch.component';
import { SidebarUserProfileComponent } from './components/sidebar-user-profile/sidebar-user-profile.component';


// Importing Ant Design Modules - Mudasir Ali


@NgModule({
  declarations: [ThemeToggleSwitchComponent, SidebarUserProfileComponent],
  imports: [],
  exports: [ThemeToggleSwitchComponent, SidebarUserProfileComponent]
})
export class SharedModule {}
