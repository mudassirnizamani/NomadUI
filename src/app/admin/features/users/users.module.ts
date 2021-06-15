import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersComponent } from './users.component';

// Importing Modules
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Importing Ant Design Modules - Mudasir Ali
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UsersComponent, UserCardComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    RouterModule,
    NzTypographyModule,
    NzButtonModule,
    NzIconModule,
  ],
})
export class UsersModule {}
