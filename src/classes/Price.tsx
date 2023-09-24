import Sale, { ISale, ISaleDetails } from "./Sale";

export interface IPriceDetails {
  price: number;
  isOnSale: boolean;
  sale?: ISaleDetails;
}

export interface IPrice {
  getPrice(): number;
  isOnSale(): boolean;
  getSale(): ISale | undefined;
}

export default class Price implements IPrice {
  private price: number;
  private hasASale: boolean;
  private sale: ISale | undefined;

  constructor({ price, isOnSale, sale }: IPriceDetails) {
    this.hasASale = isOnSale;
    this.price = price;

    if (this.hasASale && sale) {
      this.sale = new Sale(sale);
    }
  }
  public getPrice(): number {
    return this.price;
  }

  public isOnSale(): boolean {
    return this.hasASale;
  }

  public getSale(): ISale | undefined {
    if (this.hasASale && this.sale) return this.sale;
    return undefined;
  }
}
