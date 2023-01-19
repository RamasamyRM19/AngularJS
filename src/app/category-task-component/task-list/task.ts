export interface Task {
  id: number;
  name: string;
  subName: string;
  isImportant:boolean;
  isCompleted:boolean;
  categoryIds: number[];
  note: string;
}