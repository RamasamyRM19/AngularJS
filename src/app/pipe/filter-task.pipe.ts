import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../category-task-component/task-list/task';

@Pipe({
  name: 'filterTask',
  pure: false
})

/* The FilterTaskPipe class implements the PipeTransform interface's transform() method that accepts an
array of tasks and a filter string as arguments. The method returns a new array of tasks that
contain the filter string in their name */
export class FilterTaskPipe implements PipeTransform {

  /**
   * It takes an array of tasks and a filter string, and returns an array of tasks that match the
   * filter string
   * 
   * @param value - The array of tasks that we are filtering.
   * @param filter - The value of the filter input field.
   * @return tasks - An array of tasks that have a name that includes the filter.
   */
  public transform(value: any, filter: string): Task[] {
    if (value.length === 0 || filter === '') {
      return value;
    }
    const tasks = [];
    for (const task of value) {
      if (task.name.includes(filter)) {
        tasks.push(task);
      }
    }
    return tasks;
  }

}
