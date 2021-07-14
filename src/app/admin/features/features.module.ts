import { NgModule } from '@angular/core';
import { ProfileModule } from 'src/app/client/features/profile/profile.module';
import { IndexModule } from './index/index.module';
import { LeadsModule } from './leads/leads.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ProjectsModule } from './projects/projects.module';
import { SettingsModule } from './settings/settings.module';
import { TodosModule } from './todos/todos.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [],
  imports: [
    IndexModule,
    UsersModule,
    UserProfileModule,
    TodosModule,
    LeadsModule,
    NotificationsModule,
    ProjectsModule,
    SettingsModule,
    ProfileModule,
  ],
})
export class AdminFeaturesModule {}
