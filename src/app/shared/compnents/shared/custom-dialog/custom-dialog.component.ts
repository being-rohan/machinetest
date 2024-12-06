import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() title: string = '';
  @Output() onClose = new EventEmitter<void>();
  @Output() onMinimize = new EventEmitter<any>();
  @Output() onMaximize = new EventEmitter<void>();
  isFullscreen = false;
  isMinimized = false;

  constructor(
    public dialogRef: MatDialogRef<CustomDialogComponent>, // MatDialogRef injected here
    @Inject(MAT_DIALOG_DATA) public data: any              // MAT_DIALOG_DATA to inject data
  ) {}

  // Minimize the dialog - could be replaced with taskbar logic
  minimize() {
    this.isMinimized = true;
    console.log('Dialog minimized');
    // Here, you could trigger a taskbar minimize effect or store state to localStorage
  }

  // Maximize or restore the dialog
  maximize() {
    this.isFullscreen = !this.isFullscreen;
    console.log(this.isFullscreen ? 'Dialog maximized' : 'Dialog restored');
  }

  // Close the dialog (Cancel button)
  close() {
    this.dialogRef.close(); // Close the dialog when Cancel button is clicked
  }

  // Cancel button handler (optional: can close without saving)
  cancel() {
    this.dialogRef.close();
    console.log('Dialog canceled');
  }

  // Save the form data or any other logic here
  save() {
    this.dialogRef.close(this.data); // Optionally pass data to close event
    console.log('Dialog saved');
  }
  
}
