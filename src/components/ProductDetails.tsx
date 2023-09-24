import { IProduct } from "../classes/Product";
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
        <div className="product-name">{product.getName()}</div>
        <div className="product-price">
          <span
            className={
              "original-price " +
              (product.getPriceDetails().isOnSale() ? "strikethrough" : "")
            }
          >
            ${product.getPriceDetails().getPrice()}
          </span>
          {product.getPriceDetails().isOnSale() && (
            <span className="sales-price">
              ${product.getPriceDetails().getSale()?.getPrice()}
            </span>
          )}
        </div>
      </div>
      <div className="details-right">
        <div
          className="button"
          onClick={() => addToCart(ProductFactory.getAsCartItem(product))}
        >
          Add to Cart
        </div>
        <div
          className="button"
          onClick={() => {
            console.log("Buying");
          }}
        >
          BUY
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
