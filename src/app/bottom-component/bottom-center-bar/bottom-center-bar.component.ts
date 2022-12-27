import { Component, Input } from '@angular/core';
import { Tasks } from './task';

@Component({
  selector: 'app-bottom-center-bar',
  templateUrl: './bottom-center-bar.component.html',
  styleUrls: ['./bottom-center-bar.component.scss']
})
export class BottomCenterBarComponent {

  currentDate = new Date();

  @Input() categoryIcon?: String;
  @Input() categoryName?:String;
  //@Input() taskList?:string;

  ngOnInit(): void {
    this.categoryIcon = "fa fa-sun-o";
    this.categoryName= "My Day";
  }

  constructor(){
  }

  public TASKS: Tasks[] = [];

  public task?: Tasks;

  addNewTask(event: any) {
    if (event.key == "Enter") {
      this.task = {
        id: this.TASKS.length,
        name: event.target.value,
        subName: "Tasks",
        circleIcon: "fa fa-circle-o",
        starIcon: "fa fa-star-o"
      }
      this.TASKS.unshift(this.task);
      event.target.value = "";
    }
  }

  onImportant(categoryName: string) {
    //this.taskList.emit(categoryName);
  }

}
