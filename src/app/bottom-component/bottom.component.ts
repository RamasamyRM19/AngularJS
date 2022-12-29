import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-bottom-component',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class BottomComponent {

  public categoryName: string = "";
  public categoryIcon?: string;

  constructor() {
  }

  ngOnInit(): void { }

  getCategory(categoryName: string) {
    this.categoryIcon = categoryName.split("/")[0];
    this.categoryName = categoryName.split("/")[1];
  }

  public isVisitedItem?: boolean;

  hideBar(isVisited:boolean) {
    this.isVisitedItem = isVisited;
    //this.isVisited = !this.isVisited;
    console.log("Entered into Parent");
    console.log(this.isVisitedItem);
    if (this.isVisitedItem) {
      return 'hide-block';
    } else {
      return 'left-container';
    }
  }

  public isFullScreenItem?: boolean;

  showDefaultScreen(isFullScreen:boolean) {
    this.isFullScreenItem = isFullScreen;
    console.log("Entered into Parent");
    console.log(this.isFullScreenItem);
    if (this.isFullScreenItem) {
      return 'center-container';
    } else {
      return 'full-screen-view';
    }
  }

}
