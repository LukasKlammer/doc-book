import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
