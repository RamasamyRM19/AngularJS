import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Task } from './bottom-center-bar/task';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-bottom-component',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class BottomComponent {

  public categoryName: string = "";
  public categoryIcon?: string;
  public selectedTask!: Task;

  ngOnInit(): void {}

  constructor(public commonService: CommonService) {
  }

  getCategory(categoryName: string) {
    this.categoryIcon = categoryName.split("/")[0];
    this.categoryName = categoryName.split("/")[1];
  }

  getSelectedTask(task:Task) {
    this.selectedTask = task;
  }

}
