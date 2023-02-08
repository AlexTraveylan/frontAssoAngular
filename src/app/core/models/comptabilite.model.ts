export class Comptabilite {
  constructor(
    public id: number,
    public date: Date,
    public source: string,
    public label: string,
    public amount: string,
    public paiementType: string,
    public isPositive: boolean,
    public note?: string,
    public requestToken?: string
  ) {}
}
