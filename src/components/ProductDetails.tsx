import { IProduct } from "../classes/Product";
import Button from "./Button";
import { useShoppingCart } from "../context/ShoppingCart";
import ProductFactory from "../classes/ProductFactory";

interface IProductDetails {
  product: IProduct;
}

const ProductDetails = ({ product }: IProductDetails) => {
  const { addToCart } = useShoppingCart();
  return (
    <div className="product-details">
      <div className="details-left">
        <span>{product.getName()}</span>
        <Button
          onButtonClick={() => {
            console.log("Buying");
          }}
        >
          Buy
        </Button>
      </div>
      <div className="details-right">
        <span>
          $
          {product.getPriceDetails().isOnSale()
            ? product.getPriceDetails().getSale()?.getPrice()
            : product.getPriceDetails().getPrice()}
        </span>
        <Button
          onButtonClick={() => addToCart(ProductFactory.getAsCartItem(product))}
        >
          Add to Cart.
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
