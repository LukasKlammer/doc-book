import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocDetailsComponent } from './doc-details/doc-details.component';
import { DocListComponent } from './doc-list/doc-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'doc-list',
    pathMatch: 'full'
  },
  {
    path: 'doc-list',
    component: DocListComponent,
  },
  {
    path: 'doc-list/:id',
    component: DocDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
