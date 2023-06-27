export class BuildingCurriculumRestrictions {
    constructor(
        public BuildingCurriculumID: number | null = null,
        public Min: number | null = null,
        public Max: number | null = null,
        public Required: boolean | null = null,
        public Percentage: number | null = null,
        public StartDate: Date | null = null,
        public EndDate: Date | null = null,
        public Bigger_than: number | null = null,
        public Smaller_than: number | null = null,
        public Equal: number | null = null,
        public FieldID: number | null = null
    ) { }
}