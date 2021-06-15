import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzMessageModule } from 'ng-zorro-antd/message';
import { ToastrModule } from 'ngx-toastr';

// Importing Custom Modules - Mudasir Ali
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { BlocksModule } from './blocks/blocks.module';
import { AdminModule } from './admin/admin.module';
import { EmployeeModule } from './employee/employee.module';
import { ClientModule } from './client/client.module';
import { SharedModule } from './shared/shared.module';

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

const AdminModules = [];

const ClientModules = [];

const EmployeeModules = [];

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
    CustomModules,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
