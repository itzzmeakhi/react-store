import { CartActionTypes } from "./types"

export const toggleCartIcon = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_ICON
    };
}

export const addItem = item => {
    return {
        type: CartActionTypes.ADD_ITEM,
        payload: item
    };
}

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});
  
export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});