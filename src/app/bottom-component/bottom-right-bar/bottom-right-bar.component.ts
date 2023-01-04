import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../bottom-center-bar/task';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-bottom-right-bar',
  templateUrl: './bottom-right-bar.component.html',
  styleUrls: ['./bottom-right-bar.component.scss']
})
export class BottomRightBarComponent implements OnInit {
 
  @Input() selectedTask!: Task;
  
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

  constructor(public commonService:CommonService) {}

}
