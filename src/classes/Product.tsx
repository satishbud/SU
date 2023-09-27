import React from "react";
import { ICartItem } from "./Cart";
import { ISale } from "./Sale";
import Price, { IPrice, IPriceDetails } from "./Price";
import { ICategory } from "./Category";
import CategoryFactory from "./CategoryFactory";

export interface IProductDetails {
  id: string;
  name: string;
  imgSrc: string;
  priceDetails: IPriceDetails;
  category?: string[];
}

export interface IProduct {
  getId(): string;
  getName(): string;
  getImageSource(): string;
  getPriceDetails(): IPrice;
  getCategories(): ICategory[];
}

export default class Product implements IProduct, ICartItem {
  private id: string;
  private name: string;
  private imageSource: string;
  private price: IPrice;
  private categories: ICategory[];

  constructor({ id, name, imgSrc, priceDetails, category }: IProductDetails) {
    this.id = id;
    this.name = name;
    this.imageSource = imgSrc;
    this.price = new Price(priceDetails);

    this.categories = [];
    category?.forEach((categoryID) => {
      const category = CategoryFactory.getCategory(categoryID);
      if (category) {
        this.categories.push(category);
      }
    });

    if (this.price.isOnSale()) {
      const onSaleCategory = CategoryFactory.getCategory(
        CategoryFactory.ONSALEID
      );
      if (onSaleCategory) {
        this.categories.push(onSaleCategory);
      }
    }
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

  public getCategories(): ICategory[] {
    return this.categories;
  }
}
