export class BuildingCurriculumTime {
    constructor(
        public buildingCurriculumID: number=0,
        public startTime: Date=new Date(),
        public endTime: Date=new Date()
    ) { }
}