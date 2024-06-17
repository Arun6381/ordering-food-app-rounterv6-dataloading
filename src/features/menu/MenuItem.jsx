import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { addItem, getCurrentQuantityById } from "../card/cartSlice";
import DeleteItem from "../card/DeleteItem";
import UpdateItemQuantity from "../card/UpddataItemQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isIncart = currentQuantity;
  const classNames = " grayscale cursor-not-allowed";
  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex flex-col md:flex-row gap-5 mt-5">
      <img src={imageUrl} alt={name} className={soldOut ? classNames : ""} />

      <div className="flex flex-col gap-3 capitalize w-full pt-1">
        <p className="font-bold text-2xl">{name}</p>

        <p>{ingredients.join(", ")}</p>

        <div className="mt-20 flex justify-between flex-col md:flex-row gap-4">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}

          {isIncart && (
            <div className="flex gap-10">
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isIncart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
