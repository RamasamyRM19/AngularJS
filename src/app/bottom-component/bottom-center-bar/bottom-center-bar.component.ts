import { Component, Input, Output } from '@angular/core';
import { Tasks } from './task';

@Component({
  selector: 'app-bottom-center-bar',
  templateUrl: './bottom-center-bar.component.html',
  styleUrls: ['./bottom-center-bar.component.scss']
})
export class BottomCenterBarComponent {

  currentDate = new Date();

  @Input() categoryIcon?: String;
  @Input() categoryName?: String;
  //@Input() taskList?:string;
  public categorySelect?: String;

  ngOnInit(): void {
    this.categoryIcon = "fa fa-sun-o";
    this.categoryName = "My Day";
  }

  constructor() {
  }

  public TASKS: Tasks[] = [];

  public task?: Tasks;

  addNewTask(event: any) {
    if (event.key == "Enter") {
      let categories = [this.categoryName];
      if (this.categoryName !== "Tasks") {
        categories.push("Tasks");
      }
      this.task = {
        id: this.TASKS.length,
        name: event.target.value,
        subName: "Tasks",
        isImportant: false,
        isCompleted: false
      }
      this.TASKS.unshift(this.task);
      event.target.value = "";
    }
  }

  onImportant(categoryName: string) {
    //this.taskList.emit(categoryName);
  }

}
