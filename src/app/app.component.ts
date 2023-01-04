import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { Menu } from './bottom-component/bottom-left-bar/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To-Do';
  //private categories = []; 
  //private categories : Menu[] = []; 
  // private categoryObservable : Observable<Menu[]> ; 

  categories : Menu;

  constructor(private dataService: DataService) {
    //   this.categoryObservable = this.dataService.get_categories();

    //   this.dataService.get_categories().subscribe((res : any[])=>{
    //     console.log(res);
    //     this.categories = res;
    // });

    this.categories = {} as Menu;

  }

  ngOnInit() {
    // subscribe to the Observable to make the HTTP call
    // this.dataService.getCategories().subscribe((categories) => {
    //   // we received our posts!
    //   console.log(categories);
    // });

    // this.dataService.getCategories().subscribe(response => {
    //   this.categories = response.data;
    // });


    this.dataService.getCategories().subscribe(response => {
      //this.categories.data = response?.data?.map(item => {
        var user = {} as Menu;
        user.id = response?.id;
        user.name = response?.name;
        user.icon = response?.icon;
        user.isLastDefaultCategory = response?.isLastDefaultCategory;
        return user;
      });

  }

}
