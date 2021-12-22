import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';

import CustomButton from './../CustomButton/CustomButton';
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from './../../redux/cart/selectors';
import { toggleCartIcon } from './../../redux/cart/actions'

import './CartDropdown.scss';


const CartDropdown = ({ cartItems, toggleCartIcon }) => {
    const navigate = useNavigate();
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} /> )
                ) : <span className="empty-message">Your cart is empty</span>}
            </div>
            <CustomButton type="button" onClick={() => {
                navigate('/checkout');
                toggleCartIcon();
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => {
    return {
        toggleCartIcon: () => dispatch(toggleCartIcon())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);