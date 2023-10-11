import Product, { IProduct, IProductDetails } from "./Product";

// This will come from database
import productDetailsJson from "../data/products.json";
import { ICartItem } from "./Cart";
import { ICategory } from "./Category";
import CategoryFactory from "./CategoryFactory";
import { IPriceDetails } from "./Price";

interface IProductJSONDetails {
  id: string;
  name: string;
  imgSrc: string;
  priceDetails: IPriceDetails;
  categories?: string[];
}

const products: IProductJSONDetails[] = productDetailsJson;

export default class ProductFactory {
  private static factoryInstance: ProductFactory;

  private allProducts: Product[];

  private constructor() {
    this.allProducts = [];

    products.forEach((productDetails) => {
      let product: Product;
      let productProps: IProductDetails = productDetails as IProductDetails;
      let productCategories: ICategory[] = [];

      //set up categories
      productDetails.categories?.forEach((category) => {
        let productCategory: ICategory | null =
          CategoryFactory.getCategory(category);
        if (productCategory) productCategories.push(productCategory);
      });

      //set up on sale category
      if (
        productDetails.priceDetails.isOnSale &&
        productDetails.priceDetails.sale
      ) {
        let onSaleCategory = CategoryFactory.getCategory(
          CategoryFactory.ONSALEID
        );
        if (onSaleCategory) productCategories.push(onSaleCategory);
      }

      productProps.categories = productCategories;

      product = new Product(productProps);

      this.allProducts.push(product);
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
