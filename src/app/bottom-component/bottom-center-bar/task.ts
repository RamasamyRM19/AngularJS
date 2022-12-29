export interface Task {
  id: number;
  name: string;
  subName: string;
  isImportant:Boolean;
  isCompleted:Boolean;
  category: string[];
}