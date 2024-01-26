export class Todo {
    constructor (
        public date: string,
        public task: string,
        public dueDate: string,
        public priority: number,
        public isDone: boolean
    ) {}
}