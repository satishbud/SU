import { IPrice } from "./Price";

// Any object that wants to have a functionality to be added to cart must implement this interface
export interface ICartItem {
  getId(): string;
  getName(): string;
  getPriceDetails(): IPrice;
  getImageSource(): string;
}

/**
 * Can view the cart
 */
export interface ICartViewer {
  /**
   * Checks if the item is in the cart
   * @param item item to be checks
   */
  isInCart(item: ICartItem): boolean;

  /**
   * Returns the number of items that are in the cart
   */
  getNumOfItems(): number;

  /**
   * Returns the number of items that match the item passed in
   * @param item the item to be counted
   */
  getNumOfSpecificItems(item: ICartItem): number;

  /**
   * Retrieves all of the items in the cart
   */
  getAllItems(): ICartItem[];

  /**
   * Retrives an array of items (array will not contain duplicate items)
   */
  getAllUniqueItems(): ICartItem[];
}

/**
 * Can edit the cart
 */
export interface ICart extends ICartViewer {
  /**
   * Adds an item to the cart
   * @param item the item to be added
   */
  addToCart(item: ICartItem): void;

  /**
   * Removes all items from the cart that match the item given
   * @param item item to be removed
   * @returns the removed item
   */
  removeFromCart(item: ICartItem): ICartItem | null;
}

export default class Cart implements ICart {
  private static cart: ICart;

  private items: ICartItem[];

  private constructor() {
    this.items = [];
  }

  public getAllItems(): ICartItem[] {
    return this.items;
  }

  public getAllUniqueItems(): ICartItem[] {
    let items: ICartItem[] = [];
    this.items.forEach((item) => {
      let contains = false;
      items.forEach((i) => {
        if (item.getId() === i.getId()) contains = true;
      });
      if (!contains) items.push(item);
    });
    return items;
  }

  public isInCart(item: ICartItem): boolean {
    return this.items.find((i) => i.getId() === item.getId()) ? true : false;
  }

  public removeFromCart(item: ICartItem): ICartItem | null {
    if (!this.isInCart(item)) return null;
    this.items = this.items.filter((i) => i.getId() !== item.getId());
    return item;
  }

  public addToCart(item: ICartItem): void {
    this.items.push(item);
  }

  public static getCart(): ICart {
    if (!Cart.cart) {
      Cart.cart = new Cart();
    }
    return Cart.cart;
  }

  public getNumOfItems(): number {
    return this.items.length;
  }

  public getNumOfSpecificItems(item: ICartItem): number {
    let numberOfSpecificItem = 0;
    this.items.forEach((i) =>
      i.getId() === item.getId() ? (numberOfSpecificItem += 1) : null
    );
    return numberOfSpecificItem;
  }
}
