import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class BottomComponent {
  public categoryName?:string;

  public categoryIcon?:string;


  constructor() {}

  ngOnInit(): void {}

  getCategory(categoryName:string) {
    this.categoryIcon = categoryName.split("/")[0];
    this.categoryName = categoryName.split("/")[1];
    // this.category = categoryName;
    // console.log(this.category);

  }

}
