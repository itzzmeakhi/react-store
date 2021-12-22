import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';

import { addItem } from './../../redux/cart/actions';

import './CollectionItem.scss';


const CollectionItem = ({ item, addItem }) => {
    const { name, imageUrl, price } = item;
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton type="button" onClick={() => addItem(item)}>Add to cart</CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch(addItem(item))
    };
}

export default connect(null, mapDispatchToProps)(CollectionItem);