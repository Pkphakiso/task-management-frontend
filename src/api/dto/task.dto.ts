export interface TaskDTO{
    id:number;
    title:string;
    description: string;
    status: TaskStatus;
}
export enum TaskStatus{
    Created = 1,
    InProgress = 2,
    Done = 3
}