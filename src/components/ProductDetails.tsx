import { IProduct } from "../classes/Product";
import { useShoppingCart } from "../context/ShoppingCart";
import ProductFactory from "../classes/ProductFactory";

interface IProductDetails {
  product: IProduct;
}

const ProductDetails = ({ product }: IProductDetails) => {
  const { cart, addToCart, removeFromCart, removeItemFromCart } =
    useShoppingCart();
  const productAsCartItem = ProductFactory.getAsCartItem(product);
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
        {cart.getNumOfSpecificItems(productAsCartItem) <= 0 ? (
          <>
            <div
              className="button"
              onClick={() => addToCart(productAsCartItem)}
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
          </>
        ) : (
          <>
            <div
              className="generic-button quantities-button"
              onClick={() => removeFromCart(productAsCartItem)}
            >
              -
            </div>
            <div className="quantity">
              {cart.getNumOfSpecificItems(productAsCartItem)}
            </div>
            <div
              className="generic-button quantities-button"
              onClick={() => addToCart(productAsCartItem)}
            >
              +
            </div>
            <div
              className="generic-button remove-button"
              onClick={() => removeItemFromCart(productAsCartItem)}
            >
              Remove
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
