import { Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddArticleComponent } from './shared/compnents/pages/add-article/add-article.component';
import { PublishedArticlesComponent } from './shared/compnents/pages/published-articles/published-articles.component';
import { ArticleDialogComponent } from './shared/compnents/shared/article-dialog/article-dialog.component';
import { CustomDialogComponent } from './shared/compnents/shared/custom-dialog/custom-dialog.component';
import { TaskbarComponent } from './shared/compnents/shared/taskbar/taskbar.component';
import { MatetrialModule } from './shared/material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    AddArticleComponent,
    PublishedArticlesComponent,
    ArticleDialogComponent,
    CustomDialogComponent,
    TaskbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatetrialModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} }, // Default value for dialog data
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  

}
