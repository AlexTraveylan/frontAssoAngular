export class toDo {
  constructor(
    public id: number,
    public description: string,
    // 0 : not assigned, 1 : choosed, 2 : alertTime, 3 : done
    public statut: 0 | 1 | 2 | 3 | 4,
    public informations: string,
    public orgaId: number,
    public userAssigned?: string | null,
    public dateTimeAssigned?: Date | null
  ) {}
}
