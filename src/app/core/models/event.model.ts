export class Event {
  constructor(
    public id: number,
    public day: number,
    public mouth: string,
    public year: number,
    public title: string,
    public description: string,
    public lien?: string
  ) {}
}
