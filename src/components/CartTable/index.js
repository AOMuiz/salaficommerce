import { Link } from "react-router-dom";
import Price from "../price";
// import { getCartSubTotal } from "../../utils/Helpers";
import bag from "../../assets/images/bag.png";

function CartTable({ cart }) {
  //   const updateCartQuantity = useUpdateCartQuantityContext();
  //   const [cartItems, setCartItems] = useState([]);
  //   const [subtotal, setSubtotal] = useState(0);

  //   useEffect(() => {
  //     setCartItems(cart);
  //     setSubtotal(getCartSubTotal(cart));
  //   }, [cart]);

  function updateItem(id, quantity) {
    //   updateCartQuantity(id, quantity);
  }

  return (
    <>
      <div className="min-h-80 max-w-3xl my-4 sm:my-8 mx-auto w-full text-blue-900">
        <table className="mx-auto w-full">
          <thead>
            <tr className="uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light">
              <th className="font-bold px-6 py-4">Product</th>
              <th className="font-bold px-6 py-4 hidden sm:table-cell">
                Price
              </th>
              <th className="font-bold px-6 py-4">Quantity</th>
              <th className="font-bold px-6 py-4">Total</th>
              <th className="font-bold px-6 py-4">Remove</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-palette-lighter">
            {/* //Map Cart over items here */}
            <tr className="text-sm sm:text-base text-gray-600 text-center">
              <td className="font-primary font-medium px-4 sm:px-6 py-4 flex items-center">
                <img
                  src={bag}
                  alt="bag"
                  height={64}
                  width={64}
                  className={`hidden sm:inline-flex`}
                />
                <Link to={`/products/productId`}>
                  <span className="pt-1 hover:text-palette-dark flex flex-col">
                    <span>Laptop Bag</span>
                    <span>size: XL</span>
                  </span>
                </Link>
              </td>
              <td className="font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
                <Price currency="$" num="20" numSize="text-lg" />
              </td>
              <td className="font-primary font-medium px-4 sm:px-6 py-4">
                <input
                  type="number"
                  inputMode="numeric"
                  id="variant-quantity"
                  name="variant-quantity"
                  min="1"
                  step="1"
                  value="5"
                  onChange={(e) => updateItem()}
                  className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
                />
              </td>
              <td className="font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
                <Price currency="$" num="100" numSize="text-lg" />
              </td>
              <td className="font-primary font-medium px-4 sm:px-6 py-4">
                <button
                  aria-label="delete-item"
                  className=""
                  onClick={() => updateItem()}
                >
                  <div className="w-8 h-8 text-palette-primary border border-palette-primary p-1 hover:bg-palette-lighter">
                    x
                  </div>
                </button>
              </td>
            </tr>
            <tr className="text-center">
              <td></td>
              <td className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">
                Subtotal
              </td>
              <td className="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
                <Price currency="$" num="20.99" numSize="text-xl" />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CartTable;
