import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/services/storage.service';
import { ArticleDialogComponent } from '../../shared/article-dialog/article-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-published-articles',
  templateUrl: './published-articles.component.html',
  styleUrls: ['./published-articles.component.scss']
})
export class PublishedArticlesComponent implements OnInit {

  articles: any[] = []; // Array to hold the articles
  searchTerm: string = ''; // For search functionality

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    // Load published articles (this can come from an API or localStorage)
    this.articles = [
      { 
        id: 1, 
        title: 'Published Article 1', 
        body: 'This is the body of the first published article. It has content that describes the article.' 
      },
      { 
        id: 2, 
        title: 'Published Article 2', 
        body: 'This is the body of the second published article. It provides more insights and detailed information.' 
      },
      { 
        id: 3, 
        title: 'Published Article 3', 
        body: 'The body of article 3 goes here. It also contains useful data and insights.' 
      }
    ];
  }

  // Filter articles based on the search term
  get filteredArticles() {
    return this.articles.filter(article => 
      article.title.toLowerCase().includes(this.searchTerm.toLowerCase()) // Case insensitive search
    );
  }

  // Open article details in a dialog box when the user clicks on "View Details"
  viewArticle(article: any) {
    const dialogRef = this.dialog.open(ArticleDialogComponent, {
      width: '500px', // Width of the dialog box
      data: article // Pass the article data to the dialog component
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle dialog closure if needed
      console.log('Dialog closed', result);
    });
  }
}
