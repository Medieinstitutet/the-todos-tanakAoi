export class Todo {
    constructor (
        public deadline: number,
        public task: string,
        public isDone: boolean,
        public priority: number
    ) {}
}