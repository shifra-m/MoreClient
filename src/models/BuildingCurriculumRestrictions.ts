export class BuildingCurriculumRestrictions {
    constructor(
        public buildingCurriculumID: number|null=null ,
        public min: number | null = null,
        public max: number | null = null,
        public required: boolean | null = null,
        public percentage: number | null = null,
        public startDate: Date | null = null,
        public endDate: Date | null = null,
        public bigger_than: number | null = null,
        public smaller_than: number | null = null,
        public equal: number | null = null,
        public fieldID: number | null = null
    ) { }
}