import React from "react";
import { ICartItem } from "./Cart";
import { ISale } from "./Sale";
import Price, { IPrice, IPriceDetails } from "./Price";

export interface IProductDetails {
  id: string;
  name: string;
  imgSrc: string;
  priceDetails: IPriceDetails;
}

export interface IProduct {
  getId(): string;
  getName(): string;
  getImageSource(): string;
  getPriceDetails(): IPrice;
}

export default class Product implements IProduct, ICartItem {
  private id: string;
  private name: string;
  private imageSource: string;
  private price: IPrice;

  constructor({ id, name, imgSrc, priceDetails }: IProductDetails) {
    this.id = id;
    this.name = name;
    this.imageSource = imgSrc;
    this.price = new Price(priceDetails);
  }

  public getPriceDetails(): IPrice {
    return this.price;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getImageSource(): string {
    return this.imageSource;
  }
}
