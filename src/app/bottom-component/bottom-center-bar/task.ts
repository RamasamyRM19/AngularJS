export interface Task {
  id: number;
  name: string;
  subName: string;
  isImportant:Boolean;
  isCompleted:Boolean;
  categoryIds: number[];
  note: string;
}