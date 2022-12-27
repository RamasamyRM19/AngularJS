import { Component, Input } from '@angular/core';
import { Tasks } from '../task';

@Component({
  selector: 'app-center-task',
  templateUrl: './center-task.component.html',
  styleUrls: ['./center-task.component.scss']
})
export class CenterTaskComponent {
  @Input() task?:Tasks[];
}
