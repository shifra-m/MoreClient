export class Course{
    constructor(
   
    public name?:string,
    public professionID :number|null=null,
    public hoursPerWeek :number|null=null,
    public hours :number|null=null,
    public credits :number|null=null,
    public cost :number|null=null,
    public minimumScore :number|null=null,
    public learningStyleID :number|null=null,
    public schoolID :number|null=null,
    public userCreatedID :number|null=null,
    public dateCreate :Date|null=null,
    public userUpdatedID :number|null=null,
    public dateUpdate:Date|null=null,
    public uniqueCodeID :number|null=null,
    public yearbookID:number|null=null,
    public code:string|null=null,
    public coordinationTypeId :number|null=null){}
}