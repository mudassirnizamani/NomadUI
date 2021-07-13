import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';

// Importing Modules - Mudasir Ali
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopOverviewComponent } from './components/top-overview/top-overview.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    IndexComponent,
    TopOverviewComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class IndexModule { }
