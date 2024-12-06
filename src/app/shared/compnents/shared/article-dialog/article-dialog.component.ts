import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-article-dialog',
  templateUrl: './article-dialog.component.html',
  styleUrls: ['./article-dialog.component.scss']
})
export class ArticleDialogComponent implements OnInit {
  articleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ArticleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.articleForm = this.fb.group({
      title: [data?.title || '', Validators.required],
      body: [data?.body || '', Validators.required],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  save() {
    if (this.articleForm.valid) {
      this.dialogRef.close(this.articleForm.value);
    }
  }

}
