export class GeneralRestrictions {
  constructor(
    public generalRestrictionsID: number = 0,
    public schoolID: number = 0,
    public minPrice: number = 0,
    public maxPrice: number = 0,
    public minHours: number = 0,
    public maxHours: number = 0
  ) { }
}