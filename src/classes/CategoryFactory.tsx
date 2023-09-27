// This will come from database
import categoryDetailsJson from "../data/categories.json";
import { ICartItem } from "./Cart";
import Category, { ICategory, ICategoryDetails } from "./Category";

const categories: ICategoryDetails[] = categoryDetailsJson;

export default class CategoryFactory {
  private static factoryInstance: CategoryFactory;
  public static ONSALEID: string = "300000";

  private allCategories: Category[];

  private constructor() {
    this.allCategories = [];

    categories.forEach((categoryDetail) => {
      this.allCategories.push(new Category(categoryDetail));
    });
  }

  private getAllCategories(): ICategory[] {
    return this.allCategories;
  }

  public static getAllCategories(): ICategory[] {
    if (!CategoryFactory.factoryInstance) {
      CategoryFactory.factoryInstance = new CategoryFactory();
    }

    return CategoryFactory.factoryInstance.getAllCategories();
  }

  public static getCategory(category: string): ICategory | null {
    return (
      CategoryFactory.getAllCategories().find((c) => c.getId() === category) ||
      null
    );
  }
}
