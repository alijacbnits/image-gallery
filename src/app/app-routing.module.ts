import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'post/list',
    pathMatch: 'full'
  },
  {
    path: 'post/list',
    loadChildren: () => import('./pages/list-page/list-page.module').then((m)=>m.ListPageModule)   
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
