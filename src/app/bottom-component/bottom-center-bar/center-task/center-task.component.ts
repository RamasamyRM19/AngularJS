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
  @Output() selectedTask = new EventEmitter<Task>();

  ngOnInit(): void {}

  constructor(public commonService: CommonService) { }

  getSelectedTask(task:Task) {
    this.selectedTask.emit(task);
  }
}
