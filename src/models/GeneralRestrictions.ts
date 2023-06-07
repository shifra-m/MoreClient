export class GeneralRestrictions {
  constructor(
    public generalRestrictionsID: number | null = null,
    public schoolID: number | null = null,
    public minPrice: number | null = null,
    public maxPrice: number | null = null,
    public minHours: number | null = null,
    public maxHours: number | null = null
  ) { }
}