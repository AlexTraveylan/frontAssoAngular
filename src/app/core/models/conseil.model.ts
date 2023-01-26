export class ConseilEcole {
  constructor(
    public id: number,
    public date: string,
    public resume: string,
    public detailPdf: string,
    public isHidden: boolean
  ) {}
}
