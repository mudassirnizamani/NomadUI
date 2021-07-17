import { NgModule } from '@angular/core';
import { ProjectsSummaryComponent } from './components/projects-summary/projects-summary.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { IndexComponent } from './index.component';

@NgModule({
  declarations: [IndexComponent, ProjectsSummaryComponent, ProjectsComponent],
  imports: [],
})
export class IndexModule {}
