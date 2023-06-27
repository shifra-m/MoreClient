export class ScheduleEvent{
    constructor(public id:number=0,
                public event:string="",
                public color:string="white",
                public trash:boolean=false,
                public edit:boolean=false
                ){
    }
}