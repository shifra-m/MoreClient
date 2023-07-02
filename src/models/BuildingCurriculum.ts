export class BuildingCurriculum {
    constructor(
        public addressID: number | null = null,
        public schoolID: number | null = null,
        public buildingCurriculumName: string | null = null,
        public payment: number | null = null,
        public sumDiscount: number | null = null,
        public percentageDiscount: number | null=null,
        public roomID: number | null = null,
        public purposeStudies: number | null = null,
        public minPrice: number | null = null,
        public maxPrice: number | null = null,
        public minHours: number | null = null,
        public maxHours: number | null = null,
    ) { }
}