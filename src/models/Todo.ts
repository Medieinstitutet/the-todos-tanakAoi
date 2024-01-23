export class Todo {
    constructor (
        public todoId: number,
        public date: string,
        public task: string,
        public deadline: string,
        public priority: number,
        public isDone: boolean
    ) {}
}