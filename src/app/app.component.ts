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

}
