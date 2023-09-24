import Product, { IProduct, IProductDetails } from "./Product";

// This will come from database
import productDetailsJson from "../data/products.json";
import { ICartItem } from "./Cart";

const products: IProductDetails[] = productDetailsJson;

export default class ProductFactory {
  private static factoryInstance: ProductFactory;

  private allProducts: Product[];

  private constructor() {
    this.allProducts = [];

    products.forEach((productDetails) => {
      this.allProducts.push(new Product(productDetails));
    });
  }

  private getAllProducts(): IProduct[] {
    return this.allProducts;
  }

  public static getAllProducts(): IProduct[] {
    if (!ProductFactory.factoryInstance) {
      ProductFactory.factoryInstance = new ProductFactory();
    }

    return ProductFactory.factoryInstance.getAllProducts();
  }

  /**
   * Morphs the passed product to a cart item
   * @param product the product to be morphed
   * @returns the mophed product
   */
  public static getAsCartItem(product: IProduct): ICartItem {
    const matchedProduct = ProductFactory.factoryInstance.allProducts.find(
      (p) => p.getId() === product.getId()
    );
    return matchedProduct as ICartItem;
  }

  public static getAsProduct(item: ICartItem): IProduct {
    const matchedProduct = ProductFactory.factoryInstance.allProducts.find(
      (i) => i.getId() === item.getId()
    );
    return matchedProduct as IProduct;
  }
}
