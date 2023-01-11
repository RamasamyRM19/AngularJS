import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable, Subject } from 'rxjs';
import { Menu } from './bottom-component/category/menu';
import { LoaderService } from './services/loader.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To-Do';

  //isLoading: Subject<boolean> = this.loaderService.isLoading;

  // constructor(private loaderService: LoaderService) {
  // }

  // ngOnInit() {
  //   this.loaderService.show();
 
  //   setTimeout(() => {
  //     this.loaderService.hide();
  //   }, 2000);
  // }

  //isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService){
  }

  // ngOnInit(){
  // this.loaderService.show();
  // setTimeout(()=>{
  //   this.loaderService.hide()
  // },2000)
  // }
}
