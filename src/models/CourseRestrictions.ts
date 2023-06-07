export class CourseRestrictions {
  constructor(
    public courseRestrictionsID: number | null = null,
    public course1: number | null = null,
    public course2: number | null = null,
    public schoolID: number | null = null,
    public conditionID: number | null = null
  ) { }

}