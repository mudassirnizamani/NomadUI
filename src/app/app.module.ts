import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

// Ant Design Modules
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

// Toast Messages Modules
import { NzMessageModule } from 'ng-zorro-antd/message';
import { ToastrModule } from 'ngx-toastr';

// Custom Modules - Mudasir Ali
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { BlocksModule } from './blocks/blocks.module';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { EmployeeModule } from './employee/employee.module';

// Ngrx Modules
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

// Admin Modules
import { AdminBlocksModule } from './admin/blocks/blocks.module';
import { AdminFeaturesModule } from './admin/features/features.module';
import { AdminSharedModule } from './admin/shared/shared.module';

// Client Modules
import { ClientBlocksModule } from './client/blocks/blocks.module';
import { ClientFeaturesModule } from './client/features/features.module';
import { ClientSharedModule } from './client/shared/shared.module';

// Employee Modules
import { EmployeeBlocksModule } from './employee/blocks/blocks.module';
import { EmployeeSharedModule } from './employee/shared/shared.module';
import { EmployeeFeaturesModule } from './employee/features/features.module';

// Reducers
import * as fromUser from './store/reducers/user/user.reducer';
import * as fromUsers from './store/reducers/users/users.reducer';
import * as fromLeads from './store/reducers/leads/leads.reducer';
import * as fromNotificaionts from './store/reducers/notifications/notifcations.reducer'

// Effects
import { UserEffects } from './store/effects/user/user.effects';
import { usersEffects } from './store/effects/users/users';

registerLocaleData(en);

// Modules Variables - Mudasir Ali
const CustomModules = [
  CoreModule,
  BlocksModule,
  FeaturesModule,
  AdminModule,
  ClientModule,
  EmployeeModule,
  SharedModule,
];

const AdminModules = [
  AdminBlocksModule,
  AdminFeaturesModule,
  AdminSharedModule,
];

const ClientModules = [
  ClientBlocksModule,
  ClientFeaturesModule,
  ClientSharedModule,
];

const EmployeeModules = [
  EmployeeBlocksModule,
  EmployeeSharedModule,
  EmployeeFeaturesModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 6000,
      progressBar: true,
    }),
    NzMessageModule,
    StoreModule.forRoot({
      user: fromUser.reducer,
      users: fromUsers.reducer,
      leads: fromLeads.reducer,
      notifications: fromNotificaionts.reducer
    }),
    CustomModules,
    AdminModules,
    ClientModules,
    EmployeeModules,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([UserEffects, usersEffects]),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
