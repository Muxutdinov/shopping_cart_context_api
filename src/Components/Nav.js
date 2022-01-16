import React from "react";
import { CardMembershipOutlined } from "@mui/icons-material";
import "./Nav.css";
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";

const Nav = () => {
  const { cartItems, showHideCart } = useContext(CartContext);

  return (
    <nav>
      <div className='nav__left'>Shop card</div>
      <div className='nav__middle'>
      </div>
      <div className='nav__right'>
        <div className='cart__icon'>
        <CardMembershipOutlined
          aria-hidden='true'
        onClick={showHideCart}
        />
          {cartItems.length > 0 && (
            <div className='item__count'>
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
