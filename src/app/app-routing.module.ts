import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleDetailComponent } from './article/detail/detail.component';
import { ArticleEditComponent } from './article/edit/edit.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ArticleDetailComponent },
  { path: 'edit', component: ArticleEditComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
