export interface ISaleDetails {
  price: number;
  endDate?: Date;
}

export interface ISale {
  getPrice(): number;
  getEndDate(): Date | undefined;
}

export default class Sale implements ISale {
  private price: number;
  private endDate: Date | undefined;

  constructor({ price, endDate }: ISaleDetails) {
    this.price = price;
    this.endDate = endDate ? endDate : undefined;
  }

  public getPrice(): number {
    return this.price;
  }
  public getEndDate(): Date | undefined {
    return this.endDate;
  }
}
