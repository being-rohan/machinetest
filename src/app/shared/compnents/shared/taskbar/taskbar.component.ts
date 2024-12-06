import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StorageService } from 'src/app/shared/services/services/storage.service';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit {

  constructor(private storage: StorageService) {
    this.dialogs = this.storage.get('minimizedDialogs') || [];
  }
  @Output() onReopen = new EventEmitter<any>();
  dialogs: any[] = [];

  ngOnInit() {
    const savedDialogs = localStorage.getItem('minimizedDialogs');
    if (savedDialogs) {
      this.dialogs = JSON.parse(savedDialogs);
    }
  }

  minimizeDialog(dialog: any) {
    this.dialogs.push({ id: dialog.id, title: dialog.title, data: dialog.data });
    localStorage.setItem('minimizedDialogs', JSON.stringify(this.dialogs));
  }

  reopenDialog(dialog: any) {
    const index = this.dialogs.findIndex((d) => d.id === dialog.id);
    if (index > -1) {
      const dialogToReopen = this.dialogs[index];
      this.dialogs.splice(index, 1);
      localStorage.setItem('minimizedDialogs', JSON.stringify(this.dialogs));
      this.onReopen.emit(dialogToReopen); // Emit dialog data to the parent component
    }
  }

}
