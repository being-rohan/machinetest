import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './shared/compnents/pages/add-article/add-article.component';
import { PublishedArticlesComponent } from './shared/compnents/pages/published-articles/published-articles.component';

const routes: Routes = [
  { path: '', redirectTo: 'add-article', pathMatch: 'full' },
  { path: 'add-article', component: AddArticleComponent },
  { path: 'published-articles', component: PublishedArticlesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
