import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingCart } from './../../assets/images/shopping-bag.svg';
import { toggleCartIcon } from './../../redux/cart/actions';
import { selectCartItemsCount } from '../../redux/cart/selectors';

import './CartIcon.scss';

const CartIcon = ({ toggleCartIcon, itemCount }) => {
    return (
        <div className="cart-icon">
            <ShoppingCart onClick={toggleCartIcon} className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    );
}

const mapStateToprops = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => {
    return {
        toggleCartIcon: () => dispatch(toggleCartIcon())
    };
}

export default connect(mapStateToprops, mapDispatchToProps)(CartIcon);