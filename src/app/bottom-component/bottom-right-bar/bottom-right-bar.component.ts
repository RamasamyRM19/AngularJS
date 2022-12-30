import { Component, Input } from '@angular/core';
import { Task } from '../bottom-center-bar/task';

@Component({
  selector: 'app-bottom-right-bar',
  templateUrl: './bottom-right-bar.component.html',
  styleUrls: ['./bottom-right-bar.component.scss']
})
export class BottomRightBarComponent {
  ngOnInit(): void {
    this.selectedTask = {
      id: 0,
      name: '',
      subName: 'Tasks',
      isImportant: false,
      isCompleted: false,
      category: []
    };
  }
  
  @Input() selectedTask!: Task;

}
