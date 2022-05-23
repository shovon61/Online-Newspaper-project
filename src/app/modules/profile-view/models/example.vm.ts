import { Exam } from './example.interface'
export class vm {
    userId!: number;
    id!: number;
    title!: string;
    body!:any;
    constructor(){}
    init(data: Exam) {
        this.id = data.id;
        this.userId = data.userId;
        this.title = data.title;
        this.body = data.body;
    }
}
