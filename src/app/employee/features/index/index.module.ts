import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [IndexComponent, ProjectsComponent],
  imports: [CommonModule],
})
export class IndexModule {}
