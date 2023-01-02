import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-center-task',
  templateUrl: './center-task.component.html',
  styleUrls: ['./center-task.component.scss']
})
export class CenterTaskComponent {
  @Input() taskList: Task[] =[];
  @Input() task: Task[] = [];
  public taskItem: Task[] = [];
  @Input() titleName = "";
  @Input() categoryName?: String;
  public selectedCategoryItem?: Task;

  ngOnInit(): void {
    this.renderTask();
  }

  public renderTask() {
    this.taskItem = [];
    this.task.forEach(task => {
      if (task.name === this.titleName) {
        this.taskItem.push(task);
      }
    });
  }

  constructor(public commonService: CommonService) { }

  @Output() selectedTask = new EventEmitter<Task>();

  getSelectedTask(task:Task) {
    this.selectedTask.emit(task);
  }

  toggleContent() {
    this.commonService.toggleRightContent();
  }
}
