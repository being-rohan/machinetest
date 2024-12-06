import { Component, Inject, OnInit } from '@angular/core';
import { ArticleDialogComponent } from '../../shared/article-dialog/article-dialog.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CustomDialogComponent } from '../../shared/custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  articles = [
    { title: 'Draft Article 1', body: 'This is a draft article' },
    { title: 'Published Article 1', body: 'This is a published article' }
  ];
  
  searchQuery = '';

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openArticleDialog(article: any = null) {
    const dialogRef = this.dialog.open(ArticleDialogComponent, {
      data: article
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Save article (could be to localStorage or a backend API)
      }
    });
  }

  filteredArticles() {
    return this.articles.filter(article => 
      article.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
